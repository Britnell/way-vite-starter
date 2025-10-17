import "./style.css";
import way from "wayy";

way.store("user", () => {
  const id = "x";
  return {
    id,
  };
});

way.render(document.body);
