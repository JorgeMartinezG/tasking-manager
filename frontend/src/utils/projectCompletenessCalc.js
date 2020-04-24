export function computeCompleteness(tasks) {
  const totalTasks = tasks.features.length;
  const mapped = tasks.features.filter((task) => task.properties.taskStatus === 'MAPPED').length;
  const validated = tasks.features.filter((task) => task.properties.taskStatus === 'VALIDATED')
    .length;
  return {
    percentMapped: parseInt(((mapped + validated) / totalTasks) * 100),
    percentValidated: parseInt((validated / totalTasks) * 100),
  };
}
