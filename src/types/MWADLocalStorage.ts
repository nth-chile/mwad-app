import GoogleTranslateLangCodes from './GoogleTranslateLangCodes'
import SkillLevel from './SkillLevel'

export interface Lang {
  langCode: GoogleTranslateLangCodes;
  skillLevel?: SkillLevel; 
}

interface MWADLocalStorage {
  langs: Lang[];
  timestamp: Date;
}

export default MWADLocalStorage