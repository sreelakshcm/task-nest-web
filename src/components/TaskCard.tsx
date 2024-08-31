import React from 'react';

interface TaskCardProps {
  title: string;
  description: string;
}

const TaskCard: React.FC<TaskCardProps> = ({ title, description }) => {
  return (
    <div className="card p-4 rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2">{description}</p>
    </div>
  );
};

export default TaskCard;
