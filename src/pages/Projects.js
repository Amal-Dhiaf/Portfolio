import React from 'react'
const PROJECTS = [
    {
        title: 'Pricing',
        description: 'Pricing section with 3 plans',
        url: 'https://amal-dhiaf.github.io/pricing/',
        githubID: 'pricing'
    },
    {
        title: 'Business Land',
        description: 'Web page developed with only HTML and CSS',
        url: 'https://amal-dhiaf.github.io/business-land/ ',
        githubID: 'business-land'
    }
]

function Projects() {
    return (
        <div>
            <div> 
                { PROJECTS.map(item => ( 
                    <div key={ item.githubID} style={{ border: 'solid 1px black', margin:10, padding: 10}}> 
                    <h1> {item.title} </h1>
                    <p> {item.description}</p>
                    <a href={item.url} target='_blank'> Preview </a>
                    <h6>{item.githubID} </h6>
                    </div>
                )) }
            </div>
        </div>
    )
}

export default Projects