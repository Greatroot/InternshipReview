import React from "react"

class Search extends React.Component {
    constructor() {
        super()
        this.state = {
            companyName: "",
            startMonth: "",
            startYear: "",
            endMonth: "",
            endYear: "",
            internshipPosition: "",
            rating: "",
            internshipReview: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        }) 
    }
render() {
    return(
        <div className="form-parameters">
            <div className="form-header">
                <p> Write a Review </p>
            </div>
            <br />
            <form> 
                <label>Name of Company:</label>
                <input 
                    name="companyName"
                    type="text" 
                    className="input-text"
                    value={this.state.companyName} 
                    onChange={this.handleChange} />
                <br /><br /><br />

                <label>Internship Start Date:</label>
                <div className="start-month">
                    <select 
                        value={this.state.startMonth} 
                        name="startMonth" 
                        onChange={this.handleChange}
                    >
                        <option value="">Month</option>
                        <option value="January"> January</option>
                        <option value="February">February </option>
                        <option value="March">March </option>
                        <option value="April">April </option>
                        <option value="May"> May</option>
                        <option value="June"> June</option>
                        <option value="July"> July</option>
                        <option value="August"> August</option>
                        <option value="September"> September</option>
                        <option value="October"> October</option>
                        <option value="November"> November</option>
                        <option value="December">December </option>
                    </select>
                </div>
                <div className="start-year">
                    <select
                        value={this.state.startYear} 
                        name="startYear" 
                        onChange={this.handleChange}
                    >
                        <option value="">Year</option>
                        <option value="2016"> 2016</option>
                        <option value="2017">2017 </option>
                        <option value="2018">2018 </option>
                        <option value="2019">2019 </option>
                        <option value="2020"> 2020</option>
                        <option value="2021"> 2021</option>
                    </select>
                </div>
                <br /><br /><br />
                <label>Internship End Date:</label>
                <div className="start-month">
                    <select
                        value={this.state.endMonth} 
                        name="endMonth" 
                        onChange={this.handleChange}
                    >
                        <option value="">Month</option>
                        <option value="January"> January</option>
                        <option value="February">February </option>
                        <option value="March">March </option>
                        <option value="April">April </option>
                        <option value="May"> May</option>
                        <option value="June"> June</option>
                        <option value="July"> July</option>
                        <option value="August"> August</option>
                        <option value="September"> September</option>
                        <option value="October"> October</option>
                        <option value="November"> November</option>
                        <option value="December">December </option>
                    </select>
                </div>
                <div className="start-year">
                    <select
                        value={this.state.endYear} 
                        name="endYear" 
                        onChange={this.handleChange}
                    >
                        <option value="">Year</option>
                        <option value="2016"> 2016</option>
                        <option value="2017">2017 </option>
                        <option value="2018">2018 </option>
                        <option value="2019">2019 </option>
                        <option value="2020"> 2020</option>
                        <option value="2021"> 2021</option>
                    </select>
                </div>
                <br /><br /><br />

                <label>Internship Position:</label>
                <input
                    name="internshipPosition"
                    type="text" 
                    className="input-text"
                    value={this.state.internshipPosition} 
                    onChange={this.handleChange}
                    />
                <br /><br /><br />

                <label>Internship Rating:</label>
                <div className="radio-label">

                    <input
                    type="radio"
                    name="rating"
                    value="oneStar"
                    checked={this.state.rating === "oneStar"}
                    onChange={this.handleChange}
                    />

                    <input
                    type="radio"
                    name="rating"
                    value="twoStar"
                    checked={this.state.rating === "twoStar"}
                    onChange={this.handleChange}/>

                    <input
                    type="radio"
                    name="rating"
                    value="threeStar"
                    checked={this.state.rating === "threeStar"}
                    onChange={this.handleChange}/>

                    <input
                    type="radio"
                    name="rating"
                    value="fourStar"
                    checked={this.state.rating === "fourStar"}
                    onChange={this.handleChange}/>

                    <input
                    type="radio"
                    name="rating"
                    value="fiveStar"
                    checked={this.state.rating === "fiveStar"}
                    onChange={this.handleChange}/>
                </div>
                <br /><br /><br />

                <label>Internship Review:</label>
                <br /> <br /> <br />

                <input
                name="internshipReview"
                type="text" 
                className="review-text"
                value={this.state.internshipReview} 
                onChange={this.handleChange}/>

                <br /><br /><br />
                <div className="button-submit">
                <button type="button">Submit</button>
                </div>
            </form>
        </div>
    )
}
}
export default Search