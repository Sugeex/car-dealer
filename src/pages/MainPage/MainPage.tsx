import { Button, Input } from "antd";
import s from "./MainPage.module.scss"
import { SearchOutlined } from "@ant-design/icons";

const MainPage = () => {
    return (
        <div className={s.mainPageContainer}>
            <Input className={s.search} placeholder="Search" prefix={<SearchOutlined className={s.searchIcon} />}/>
            <Button type="text">Filter</Button>
        </div>
    )
}

export default MainPage;