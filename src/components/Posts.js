import React, { Component } from 'react';
import Header from './Header';

class Posts extends Component {
    render() {
        return (
                <div className="ui segment">
                    <Header />
                    <div className="ui segment">
                    <div className="ui left dividing rail">
                    <div className="ui segment">
                        Left Rail Content
                    </div>
                    </div>
                    <div className="ui right dividing rail">
                    <div className="ui segment">
                        Right Rail Content
                    </div>
                    </div>
                    <p >At Atria, we have placement as an integral part of the education process of a student.
                    Placement preparation & readiness starts soon after admissions - for each student,
                    identifying the basic skills and improvement areas, conducting foundation, add-on, and 
                    advantage courses, monitoring the progress and enhancing the readiness to face the placement 
                    season with confidence, is an interdisciplinary activity with oversight by the Academic 
                    Head and the Placement Head of the institution.</p>
                    <p>CS & E plays an all pervasive role in the application of technological advances to varied
                    disciplines in Engineering, Sciences, and Humanities. Graduating students have an opportunity 
                    to imbibe the theoretical foundations of computing, along with the practical tools and 
                    technologies applied across disciplines and industries. This program aims to suitably equip 
                    the students and expose them to the emerging trends and techniques. Graduating students go on 
                    to exciting careers in coveted companies or pursue higher studies/research in prestigious 
                    institutions in India and abroad.</p>
                </div>
                
            </div>
        );
    }
}


export default Posts;