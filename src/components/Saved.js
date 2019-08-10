import React , { Component } from 'react';

class Saved extends Component {
    render() {
        return(
            <div className="ui segent">
                <div >
                    <form action="/upload/photo" enctype="multipart/form-data" method="POST"> 
                        <input type="file" name="myImage" accept="image/*" />
                        <input type="submit" value="Upload Photo"/>
                    </form>
                </div>
            </div>
        );
    }
}

export default Saved;