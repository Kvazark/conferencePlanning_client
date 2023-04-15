import {useState} from "react"
import "./addRemoveInputStyle.css"
import {Clock, Dot, PlusCircleFill, RecordFill, X} from "react-bootstrap-icons";

function AddRemoveInputSchedule() {
    const [inputList, setInputList] = useState([{sectionTitle: "", startTime: "", endTime: ""}]);

    // handle input change
    const handleInputChange = (e, index) => {
        const {name, value} = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
    };

    // handle click event of the Remove button
    const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };

    // handle click event of the Add button
    const handleAddClick = () => {
        setInputList([...inputList, {sectionTitle: "", startTime: "", endTime: ""}]);
    };

    return (
        <div className="field-add-remove-input" key={'uniqueValue'}>

            {inputList.map((x, i) => {
                return (
                    <div>
                        <section className="section-field">
                            <RecordFill className="icon-recordFill" size="20px" color="#206F6D"></RecordFill>
                            <input className="inputSchedule"
                                   name="sectionTitle"
                                   placeholder=""
                                   value={x.sectionTitle}
                                   onChange={e => handleInputChange(e, i)}
                            />
                            <input className="input-section-time"
                                   name="startTime"
                                   type={"time"}
                                   value={x.startTime}
                                   onChange={e => handleInputChange(e, i)}
                            />
                            <input className="input-section-time"
                                   name="endTime"
                                   type={"time"}
                                   value={x.endTime}
                                   onChange={e => handleInputChange(e, i)}
                            />

                            {inputList.length !== 1 &&
                                <button className="btn-remove-input" onClick={() => handleRemoveClick(i)}>
                                    <X size="30px" color="#206F6D"></X></button>
                            }

                        </section>
                        {inputList.length - 1 === i &&
                            <button className="btn-add-input" onClick={handleAddClick}>
                                <PlusCircleFill className="icon-plusCircleFill" size="28px"></PlusCircleFill>
                                добавить поле
                            </button>}

                    </div>

                );
            })}
            {/*<div>*/}
            {/*    {JSON.stringify(inputList)}*/}
            {/*</div>*/}
        </div>
    );
}

export default AddRemoveInputSchedule