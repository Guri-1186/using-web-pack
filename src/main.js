import './styles/style.css';
import { SectionCreatorFactory } from './join-us.js';

document.addEventListener('DOMContentLoaded', function() {
  const sectionCreator = new SectionCreatorFactory();

  const section = sectionCreator.createSection('standard');
  section.render();
});
