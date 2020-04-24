import { computeCompleteness } from '../projectCompletenessCalc';
import { tasksGeojson } from './snippets/tasksGeometry';

it('computeCompleteness', () => {
  const project = computeCompleteness(tasksGeojson);
  expect(project.percentMapped).toBe(25);
  expect(project.percentValidated).toBe(12);
});
