import "./footer.css"
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';

export default function Footer() {
  return (
    <div className="navbarContainer">
      <div className="navbarLeft">
        <span className="footLogo">
          <LocalFireDepartmentIcon/>
        </span>
      </div>
        <div className="navbarRight">
          <span className="navbarLink"></span>
          <span className="navbarLink"></span>
        </div>

      </div>
  )
}