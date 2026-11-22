/**
 * One lock for every BrynQ page: the slide case study, the long version, the
 * two-minute story and the vault. Unlocking any of them unlocks all of them
 * for the rest of the visit.
 *
 * To change the password, run
 *
 *   node -e "console.log(require('crypto').createHash('sha256').update('NEW-PASSWORD').digest('hex'))"
 *
 * and paste the output into BRYNQ_HASH.
 */
export const BRYNQ_STORAGE_KEY = 'nda-brynq';
export const BRYNQ_HASH = '7817342db6c511520955989e173cc82e68250d03a00e263a7ba9fa73027bd6c8';

export const isBrynqUnlocked = (): boolean => {
  try {
    return sessionStorage.getItem(BRYNQ_STORAGE_KEY) === 'granted';
  } catch {
    return false;
  }
};
