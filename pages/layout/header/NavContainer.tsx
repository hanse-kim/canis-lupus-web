import { Center } from "@chakra-ui/react";
import { loginState } from "pages/common/states";
import { useRecoilState } from "recoil";

const NavContainer = () => {
  const [isLogin, setLogin] = useRecoilState(loginState);

  return (
    <Center className="navContainer" justifyContent="end">
      {isLogin}
    </Center>
  );
};

export default NavContainer;