import React, { useEffect, useState } from 'react'
import MapTopProjects from './MapTopProjects'

export default function TopProjects() {
    const [topProjects, setTopProjects] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/projects/popular')
            .then(res => res.json())
            .then(json => setTopProjects(json))
    })

    let result=0
function rank(){
    return ++result
}
    return (
        <div>
            {topProjects.map((p, index) => <MapTopProjects rank={++index} key={p.id} p={p}/>)}
            {/* {numbers.map(num => <MapTopProjects num={num}/>)} */}
        </div>
    )
}