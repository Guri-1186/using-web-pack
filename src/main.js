


 
import { JoinUsSection } from './join-us.js';
import { SectionCreatorFactory } from './join-us.js';

document.addEventListener('DOMContentLoaded', function () {
  const sectionCreator = new SectionCreatorFactory();

  JoinUsSection.render(); 

  // const StandardSection = sectionCreator.createSection('standard');
  // StandardSection.render(); // Render the StandardSection.

  // const AdvancedSection = sectionCreator.createSection('advanced');
  // AdvancedSection.render(); // Render the AdvancedSection.
});
