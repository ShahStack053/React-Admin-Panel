import"./newUser.css"

export default function NewUser() {
    return (
        <div className="newUser">
            <h1 className="newUserTitle">New User</h1>
            <form className="newUserForm">
                <div className="newUserItem">
                    <label >User Name</label>
                    <input type="text"  placeholder="Raza"/>
                </div>
                <div className="newUserItem">
                    <label >Full Name</label>
                    <input type="text"  placeholder="Raza Shah"/>
                </div>
                <div className="newUserItem">
                    <label >Date of Birth</label>
                    <input type="text"  placeholder="3 Jan 1999"/>
                </div>
                <div className="newUserItem">
                    <label >Email</label>
                    <input type="email"  placeholder="Raza@gmail.com"/>
                </div>
                <div className="newUserItem">
                    <label >Password</label>
                    <input type="password"  placeholder="password"/>
                </div>
                <div className="newUserItem">
                    <label >Phone</label>
                    <input type="text"  placeholder="+92 342 0518053"/>
                </div>
                <div className="newUserItem">
                    <label >Address</label>
                    <input type="email"  placeholder="Chakwal|Pakistan"/>
                </div>
                <div className="newUserItem">
                    <label >Gender</label>
                    <div className="newUserGender">
                    <input type="radio" name="gender" id="male" value="male"/>
                    <label For="male">Male</label>
                    <input type="radio" name="gender" id="female" value="female"/>
                    <label For="female">Female</label>
                    <input type="radio" name="gender" id="other" value="other"/>
                    <label For="other">Other</label>

                    </div>
                </div>
                <div className="newUserItem">
                <label >Active</label>
                <select name=" active" id="active" className="newUserSelect">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
                </div>
                <button className="newUserButton">Create</button>
            </form>
        </div>
    )
}


