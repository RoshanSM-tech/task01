import React, { useState } from "react";
import { Edit, Trash2, Save } from "react-feather";

function MonitarTask() {
    const [todoMsg, setTodoMsg] = useState("Example Task");
    const [isEditable, setIsEditable] = useState(false);

    return (
        <div className="p-6">
            <div className="flex items-center border border-gray-200 rounded-lg px-4 py-2 gap-3 shadow-md bg-orange-100">
            <input type="checkbox" name="" id="" className="cursor-pointer" />    
            <input
                type="text"
                className="flex-grow bg-transparent outline-none px-2"
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isEditable}
            />
           
            
        </div>
        </div>
        
    );
}

export default MonitarTask;
