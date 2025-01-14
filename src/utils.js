export const filterTasks = (tasks, filter) => {
    if (filter === 'important') {
      return tasks.filter(task => task.isImportant);
    }
    return tasks;
  };
  