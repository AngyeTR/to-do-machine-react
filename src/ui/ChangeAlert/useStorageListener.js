import React from "react";

function useStorageListener(synchronize) {
       const [storageChange, setStorageChange] = React.useState(false);

       window.addEventListener("storage", (change) => {
        if (change.key === "TODOS_V1"){
            console.log("hubo cambios");
            setStorageChange(true);
        }
       });

       const toggleShow =  () => {
        synchronize();
        setStorageChange(false);
       };
        return {
        show: storageChange,
        toggleShow: toggleShow
        }

    }


export { useStorageListener};