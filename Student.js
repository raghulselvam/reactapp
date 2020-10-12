import React from 'react';
import "./Student.css";
import {BrowserRouter as Router,Switch,Route,Link} from"react-router-dom";
function Student() {
    return (
        <div className="student">
            <div className="student_header">
    
                   <p className="student_logo">LEAD Logo</p>
                   <div className="student_person">
                
                      <img className="bell_icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRUvs4qL_VOS-ZzL5mxbIMvQwXNH2UCjELrlQ&usqp=CAU"/>
                      <img className="person_icon" src="https://cdn4.vectorstock.com/i/1000x1000/96/63/human-sociability-man-avatar-black-color-icon-icon-vector-20569663.jpg"/>
                      <p className="person_name">Person Name</p>
                   </div>
               </div>
               <div className="student_table">
                   <div className="left_table">
                      <table className="table1" >
                          <tr>
                           <td>Students</td>
                          </tr>
                          <tr className= "link_first">
                            <td>-View Students </td>
                          </tr>
                          
                          <tr >
                          <Link to="/student/add">
                            <td className="link_second">-Add Student </td>
                            </Link>
                          </tr>
                          
                          
                          <tr>
                              <td></td>
                          </tr>
                          <tr>
                              <td></td>
                          </tr>
                          <tr>
                              <td></td>
                          </tr>
                          <tr>
                              <td></td>
                          </tr>
                          <tr>
                              <td></td>
                          </tr>
                          <tr>
                              <td></td>
                          </tr>
                          <tr>
                              <td></td>
                          </tr>
                          <tr>
                              <td></td>
                          </tr>
                          <tr>
                              <td></td>
                          </tr>
                          <tr>
                              <td></td>
                          </tr>
                          <tr>
                              <td></td>
                          </tr>
                          <tr>
                              <td></td>
                          </tr>
                          <tr>
                              <td></td>
                          </tr>
                          <tr>
                              <td></td>
                          </tr>
                          <tr>
                              <td></td>
                          </tr>
                          <tr>
                              <td></td>
                          </tr>
                          <tr>
                              <td></td>
                          </tr> <tr>
                              <td></td>
                          </tr>

                      </table>
                    </div>
                    <div className="right_side">
                       <div className="right_sides"> 
                          <div>Name</div>
                           <div>Age</div>
                           <div>
                               <select>
                                  <option>School</option>
                               </select>
                            
                            </div>
                            <div>
                                <select>
                                  <option>School</option>
                                </select>
                            </div>
                            <div>
                                <select>
                                 <option>School</option>
                                </select>

                            </div>
                            
                                <button className="search">Search</button>
                            
                        </div>
                        <div className="table2">
                            <table className="tabled">
                                <tr>
                                    <th className="option1">ID^v</th>
                                    <th><select className="select">
                                     <option value="Name">Name</option>
                                      </select></th>
                                      <th><select className="select">
                                     <option value="Age">Age</option>
                                      </select></th>
                                      <th><select className="select">
                                     <option value="School">School</option>
                                      </select></th>
                                      <th className="option2">Class^v</th>
                                      <th><select className="select">
                                     <option value="Name">Division</option>
                                      </select></th>
                                      <th className="option3">Status</th>
                                      <th></th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Student Name</td>
                                    <td>10</td>
                                    <td>LEAD School Karmala</td>
                                    <td>3</td>
                                    <td>A</td>
                                    <td>Active</td>
                                    <td>
                                        <a href="#">Edit </a>
                                        < a href="#">Delete</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Student Name</td>
                                    <td>10</td>
                                    <td>LEAD School Karmala</td>
                                    <td>3</td>
                                    <td>A</td>
                                    <td>Active</td>
                                    <td>
                                        <a href="#">Edit </a>
                                        < a href="#">Delete</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Student Name</td>
                                    <td>10</td>
                                    <td>LEAD School Karmala</td>
                                    <td>3</td>
                                    <td>A</td>
                                    <td>Active</td>
                                    <td>
                                        <a href="#">Edit </a>
                                        < a href="#">Delete</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Student Name</td>
                                    <td>10</td>
                                    <td>LEAD School Karmala</td>
                                    <td>3</td>
                                    <td>A</td>
                                    <td>Active</td>
                                    <td>
                                        <a href="#">Edit </a>
                                        < a href="#">Delete</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Student Name</td>
                                    <td>10</td>
                                    <td>LEAD School Karmala</td>
                                    <td>3</td>
                                    <td>A</td>
                                    <td>Active</td>
                                    <td>
                                        <a href="#">Edit </a>
                                        < a href="#">Delete</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>Student Name</td>
                                    <td>10</td>
                                    <td>LEAD School Karmala</td>
                                    <td>3</td>
                                    <td>A</td>
                                    <td>Active</td>
                                    <td>
                                        <a href="#">Edit </a>
                                        < a href="#">Delete</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>Student Name</td>
                                    <td>10</td>
                                    <td>LEAD School Karmala</td>
                                    <td>3</td>
                                    <td>A</td>
                                    <td>Active</td>
                                    <td>
                                        <a href="#">Edit </a>
                                        < a href="#">Delete</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>Student Name</td>
                                    <td>10</td>
                                    <td>LEAD School Karmala</td>
                                    <td>3</td>
                                    <td>A</td>
                                    <td>Active</td>
                                    <td>
                                        <a href="#">Edit </a>
                                        < a href="#">Delete</a>
                                    </td>
                                </tr>
                                
                            </table>

                        </div>
                           <div className="table3">
                               <a href="#">&laquo; </a>
                               <a href="#">|1|</a>
                               <a href="#">|2|</a>
                               <a href="#">|3|</a>
                               <a href="#">|4|</a>
                               <a href="#">|5|</a>
                               <a href="#">|6|</a>
                               <a href="#">|7|</a>
                               <a href="#">&raquo;</a>
                           </div>
                           <div class="buttoned">
                             <button className="buttons1"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSzrcOHlHksenMiSTSejQYE5b3OaNWWbdk-JQ&usqp=CAU"/>Download Excel</button>
                           </div>
                    </div>
               </div>
            </div>
            

    )
}

export default Student
