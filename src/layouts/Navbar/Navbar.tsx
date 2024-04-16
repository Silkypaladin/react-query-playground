import {NavLink} from "react-router-dom";
import classes from './Navbar.module.css';
import {Button, Flex, HStack} from "@chakra-ui/react";
import {logout} from "../../features/auth/api/logout.ts";
import {notifyError, notifySuccess} from "../../lib/hot-toast.ts";
import {useQueryClient} from "react-query";
import {ApiError} from "../../data/ApiError.ts";

const Navbar = () => {
  const queryClient = useQueryClient();
  const logoutHandler = async () => {
    try {
      await logout();
      await queryClient.invalidateQueries({ queryKey: ['user'] });
      notifySuccess('Logged out!');
    } catch (error) {
      notifyError((error as ApiError).message);
    }
  }
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <Flex justifyContent='space-between'>
          <HStack className={classes.list} spacing='32px'>
            <NavLink
              to='/'
              className={({isActive}) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
            <NavLink
              to='/products'
              className={({isActive}) =>
                isActive ? classes.active : undefined
              }
            >
              Products
            </NavLink>
            <NavLink
              to='/orders'
              className={({isActive}) =>
                isActive ? classes.active : undefined
              }
            >
              Profile
            </NavLink>
          </HStack>

          <Button colorScheme='teal' variant='link' onClick={logoutHandler}>
            Log out
          </Button>
        </Flex>
      </nav>
    </header>
  )
}

export default Navbar;
