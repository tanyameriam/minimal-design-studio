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
export const BRYNQ_HASH = '1581e27de87bffae0bd4d745cd7964e68528d7a83e2e4c259a782d275df6f558';

export const isBrynqUnlocked = (): boolean => {
  try {
    return sessionStorage.getItem(BRYNQ_STORAGE_KEY) === 'granted';
  } catch {
    return false;
  }
};
