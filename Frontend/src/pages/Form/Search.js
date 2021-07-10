
import React from "react"

function search() {
    return(
        <div className="form-parameters">
            <div className="form-header">
                <p> Write a Review </p>
            </div>
            <br />
            <label>Name of Company:</label>

            <input type="text" className="input-text"/>
            <br /><br /><br />
            <label>Internship Start Date:</label>
            <div className="start-month">
                <select>
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
                <select>
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
                <select>
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
                <select>
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
            <input type="text" className="input-text"/>
            <br /><br /><br />
            <label>Internship Rating:</label>
            <div className="radio-label">

                <input type="radio"/>

                <input type="radio"/>

                <input type="radio"/>

                <input type="radio"/>

                <input type="radio"/>
            </div>

            <br /><br /><br />
            <label>Internship Review:</label>
            <br /> <br /> <br />

            <input type="text" className="review-text"/>

            <br /><br /><br />

        </div>
    )
}
export default search