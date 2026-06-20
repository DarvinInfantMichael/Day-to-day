const UserSkills = ({ skills }) => {
  return (
    <div>
      <h2>User Skills</h2>

      <p>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </p>
    </div>
  );
};

export default UserSkills;