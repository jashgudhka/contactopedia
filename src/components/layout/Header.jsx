import logo from "../../images/reactLogo.png";
export default function Header() {
  return (
    <div className="pt-3 py-1 pl-2" style={{ borderBottom: "1px solid #777" }}>
      <img src={logo} style={{ height: "35px", verticalAlign: "top" }} alt="" />
      <span className="h2 m-2 pt-4 text-white-50">ContactOPedia</span>
    </div>
  );
}
