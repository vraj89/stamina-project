import React from 'react';

export default function SkillList({ skill }) {
  return (
    <div className="container mx-auto bg-gray-200 border-t border-gray-300">
      <h2 className="font-bold text-3xl text-orange-600 text-center py-4">Skills</h2>
      {skill.map((item, index) => (
        <div key={index} className="bg-white">
          <h3 className="font-semibold text-center">
            {item.name} : {item.level}
          </h3>
        </div>
      ))}
    </div>
  );
}
