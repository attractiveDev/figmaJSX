import { useSelector } from "react-redux";
import styles from "./ExportButton.module.scss";

function ExportButton() {
  const store = useSelector((state) => state);
  console.log("store", store);
  const exportData = () => {
    const link = document.createElement("a");
    console.log("link", link)
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(store)
    )}`;

    link.href = jsonString;
    link.download = `${store.utility.projectTitle}.json`;
    link.click();
  };

  return (
    <div className={styles.button} onClick={exportData}>
      Export File
    </div>
  );
}

export default ExportButton;
