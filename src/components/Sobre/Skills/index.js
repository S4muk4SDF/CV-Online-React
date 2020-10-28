import React from 'react';
import './style.css'

import SkillsTemplate from './Skills_Template'

function Skills() {

    return (
        <main>
            <h1>Skills</h1>

            <div className="skills">
                <SkillsTemplate titulo="JavaScript" />
                <SkillsTemplate titulo="HTML" />
                <SkillsTemplate titulo="CSS" />
                <SkillsTemplate titulo="MongoDB" />
                <SkillsTemplate titulo="Swagger" />
                <SkillsTemplate titulo="Jest" />
                <SkillsTemplate titulo="React" />
                <SkillsTemplate titulo="Postgre" />
                
            </div>
        </main>
    )
}

export default Skills;