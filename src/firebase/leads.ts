import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from './config';

export interface LeadData {
  email: string;
  source: string;
  tier?: string;
}

export interface StoredLead {
  id: string;
  email: string;
  source: string;
  tier: string | null;
  timestamp: string;
}

export async function saveLead(lead: LeadData): Promise<{ success: boolean; leadId: string; storedLocally?: boolean }> {
  const normalizedEmail = lead.email.trim().toLowerCase();

  try {
    const docRef = await addDoc(collection(db, 'leads'), {
      email: normalizedEmail,
      source: lead.source,
      tier: lead.tier || null,
      timestamp: serverTimestamp(),
      status: 'pending_invite',
    });

    console.log('[App Allies] Lead successfully saved to Firestore:', docRef.id);

    // Save in localStorage backup so tester/founder can immediately review
    try {
      const existing: StoredLead[] = JSON.parse(localStorage.getItem('app_allies_leads') || '[]');
      existing.unshift({
        id: docRef.id,
        email: normalizedEmail,
        source: lead.source,
        tier: lead.tier || null,
        timestamp: new Date().toISOString(),
      });
      localStorage.setItem('app_allies_leads', JSON.stringify(existing.slice(0, 20)));
    } catch {
      // ignore
    }

    return { success: true, leadId: docRef.id };
  } catch (error) {
    console.error('[App Allies] Error saving lead to Firestore:', error);
    const fallbackId = 'lead_' + Date.now();
    try {
      const existing: StoredLead[] = JSON.parse(localStorage.getItem('app_allies_leads') || '[]');
      existing.unshift({
        id: fallbackId,
        email: normalizedEmail,
        source: lead.source,
        tier: lead.tier || null,
        timestamp: new Date().toISOString(),
      });
      localStorage.setItem('app_allies_leads', JSON.stringify(existing.slice(0, 20)));
    } catch {
      // ignore
    }

    return { success: true, leadId: fallbackId, storedLocally: true };
  }
}

export function getRecentLeads(): StoredLead[] {
  try {
    return JSON.parse(localStorage.getItem('app_allies_leads') || '[]');
  } catch {
    return [];
  }
}
