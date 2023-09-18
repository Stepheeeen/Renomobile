import { AiFillApi } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { BsWordpress, BsPhone, BsMegaphone, BsCreditCard2Back, BsFillBookmarkFill,} from "react-icons/bs";
import { AiFillDashboard, AiFillGift } from "react-icons/ai";
import { FaRegMoneyBillAlt, FaStickyNote, FaBook, FaUserAlt,} from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import Style from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={Style.sidebar}>
      <div className={Style.profile}>
        <div className={Style.avatar}>
        <RxAvatar />
        </div>
        <div className={Style.user}>
          <h3 className={Style.name}>Username</h3>
          <p className={Style.status}> Online</p>
        </div>
      </div>

      <ul>
        <li>
          <a href="#">
            <span>
              <AiFillApi className={Style.icon}/>
              Api Documentation
            </span>
          </a>
        </li>
        <li>
          <a href="#">
            <span>
              <BsWordpress className={Style.icon}/>
              Own a website
            </span>
          </a>
        </li>
        <li>
          <a href="#">
            <span>
              <AiFillDashboard className={Style.icon}/>
              Dashboard
            </span>
          </a>
        </li>
        <li>
          <a href="#">
            <span>
              <FaRegMoneyBillAlt className={Style.icon}/>
              My commission
            </span>
          </a>
        </li>
        <li>
          <a href="#">
            <span>
              <BsPhone className={Style.icon}/>
              Buy Data-Plan
            </span>
          </a>
        </li>
        <li>
          <a href="#">
            <span>
              <FaStickyNote className={Style.icon}/>
              Bills Invoice
            </span>
          </a>
        </li>
        <li>
          <a href="#">
            <span>
              <BsMegaphone className={Style.icon}/>
              Recharge
            </span>
          </a>
        </li>
        <li>
          <a href="#">
            <span>
              <FaBook className={Style.icon}/>
              Education
            </span>
          </a>
        </li>
        <li>
          <a href="#">
            <span>
              <IoIosPeople className={Style.icon}/>
              Self Service
            </span>
          </a>
        </li>
        <li>
          <a href="#">
            <span>
              <BsCreditCard2Back className={Style.icon}/>
              Fund Wallet
            </span>
          </a>
        </li>
        <li>
          <a href="#">
            <span>
              <AiFillGift className={Style.icon}/>
              Giveaway
            </span>
          </a>
        </li>
        <li>
          <a href="#">
            <span>
              <FaUserAlt className={Style.icon}/>
              Profile
            </span>
          </a>
        </li>
        <li>
          <a href="#">
            <span>
              <FaRegMoneyBillAlt className={Style.icon}/>
              Savings
            </span>
          </a>
        </li>
        <li>
          <a href="#">
            <span>
              <BsFillBookmarkFill className={Style.icon}/>
              Transactions
            </span>
          </a>
        </li>
        <li>
          <a href="#">
            <span>
              <FaRegMoneyBillAlt className={Style.icon}/>
              Withdraw Request
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
