const React = require('react')

module.exports = function(props){
  const {data} = props
  const{SWMS, important_Notices, location, project_id, project_name, project_number} =data
  // console.log('projectData.js props:', props);
  return (
    <tr class="row">
      <nav>
        <button className="button" href="#">Edit Project</button>
        <button className="button" href="#">Project Hazard Log</button>
      </nav>
      <article>
        <p><strong>Project Number: </strong>{project_number}</p>
        <p><strong>Project Name: </strong>{project_name}</p>
        <p><strong>Location: </strong>{location}</p>
        <p><strong>SWMS: </strong>{SWMS}</p>
        <p><strong>Notices: </strong>{important_Notices}</p>
      </article>
      <article>
        <p><strong>PPE: </strong>ppe Gear here</p>
      </article>
    </tr>

  )
}

// <p><strong>PROJECT DETAILS</strong></p>
//
//     <div class="PPEGear">
//       <h2>Site Required PPE Gear: </h2>
//       <table>
//         <thead>
//           <th>PPE Item:</th><th>Image:</th>
//         </thead>
//         <tbody>
//           <tr> <td>ppe_name</td><td><img src="ppe_image" alt="ppe_name"></td></tr>
//         </tbody>
//       </table>
//     </div>
