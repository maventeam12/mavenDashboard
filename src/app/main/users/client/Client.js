import FuseLoading from "@fuse/core/FuseLoading";
import FusePageCarded from "@fuse/core/FusePageCarded";
import { useDeepCompareEffect } from "@fuse/hooks";
import Button from "@mui/material/Button";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import withReducer from "app/store/withReducer";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import _ from "@lodash";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useThemeMediaQuery from "@fuse/hooks/useThemeMediaQuery";
import { selectUser } from "app/store/userSlice";
import BlogImagesTab from './ClientImagesTab';
import {
  getClient,
  newClient,
  resetClient,
  selectClientDB,
} from "../store/clientSlice";
import reducer from "../store";
import ServiceHeader from "./ServiceHeader";
import BasicInfoTab from "./BasicInfoTab";

/**
 * Form Validation Schema
 */

const schema = yup.object().shape(
  {
    name: yup
      .string()
      .required("You must enter name")
      .min(2, "Name must be at least 1 characters"),
    username: yup
      .string()
      .required("You must enter the username")
      .min(2, "The username must be at least 2 characters"),
    password: yup.string().when("password", (val, schema) => {
      if (val?.length > 0) {
        //if address exist then apply min max else not
        yup
          .string()
          .required("pssword is required")
          .min(8, "must be more than 8 characters")
          .max(30, "must be less than 30 character")
          .matches(
            "^(?=.*\\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$",
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
          );
      } else {
        return yup.string().notRequired();
      }
    }),
    address: yup.string().when("address", (val, schema) => {
      if (val?.length > 0) {
        yup
          .string()
          .required("pssword is required")
          .min(3, "must be more than 3 characters")
          .max(90, "must be less than 90 character");
      } else {
        return yup.string().notRequired();
      }
    }),
    email: yup
      .string()
      .required("You must enter the email ")
      .email("must be email format"),
    phone: yup
      .string()
      .required("You must enter the phone number")
      .min(10, "The phone number must be 10 numbers")
      .max(10, "The phone number must be 10 numbers"),
    isImportant: yup.boolean().required(""),
  },
  [["password", "password"],
  ["address", "address"]]
);

function Service(props) {
  const dispatch = useDispatch();
  const service = useSelector(selectClientDB);
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down("lg"));
  const user = useSelector(selectUser);
  const routeParams = useParams();
  const { clientId } = routeParams;
  const [tabValue, setTabValue] = useState(0);
  const [noService, setNoService] = useState(false);
  const methods = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      username: "",
      email: "",
      passsword: "",
      phone: "",
      address:'',
      logoFile:'',
      isImportant: false,
    },
    resolver: yupResolver(schema),
  });
  const { reset, watch, control, onChange, formState } = methods;
  const form = watch();
  useDeepCompareEffect(() => {
    function updateServiceState() {
      if (clientId === "new") {
        /**
         * Create New service data
         */
        dispatch(newClient());
      } else {
        /**
         * Get service data
         */
        dispatch(
          getClient({
            access_token: window.localStorage.getItem("access_token"),
            email: user.email,
            id: user.id,
            username: user.username,
            clientId,
          })
        ).then((action) => {
          /**
           * If the requested service is not exist show message
           */
          if (!action.payload) {
            setNoService(true);
          }
        });
      }
    }

    updateServiceState();
  }, [dispatch, routeParams]);

  useEffect(() => {
    if (!service) {
      return;
    }
    /**
     * Reset the form on service state changes
     */
    reset(service);
  }, [service, reset]);

  useEffect(() => {
    return () => {
      /**
       * Reset service on component unload
       */
      dispatch(resetClient());
      setNoService(false);
    };
  }, [dispatch]);

  /**
   * Tab Change
   */
  function handleTabChange(event, value) {
    setTabValue(value);
  }

  /**
   * Show Message if the requested services is not exists
   */
  if (noService) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.1 } }}
        className="flex flex-col flex-1 items-center justify-center h-full"
      >
        <Typography color="text.secondary" variant="h5">
          There is no such Client!
        </Typography>
        <Button
          className="mt-24"
          component={Link}
          variant="outlined"
          to="/users/clients"
          color="inherit"
        >
          Go to Clients Page
        </Button>
      </motion.div>
    );
  }

  /**
   * Wait while service data is loading and form is setted
   */
  if (_.isEmpty(form)) {
    return <FuseLoading />;
  }

  return (
    <FormProvider {...methods}>
      <FusePageCarded
        header={<ServiceHeader />}
        content={
          <>
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              indicatorColor="secondary"
              textColor="secondary"
              variant="scrollable"
              scrollButtons="auto"
              classes={{ root: "w-full h-64 border-b-1" }}
            >
              <Tab className="h-64" label="Basic Info" />
              <Tab className="h-64" label="Logo" />
            </Tabs>
            <div className="">
              <div
                className={tabValue !== 0 ? "hidden" : "p-16 sm:p-24 max-w-2xl"}
              >
                <BasicInfoTab />
              </div>
              <div className={tabValue !== 1 ? 'hidden' : 'p-16 sm:p-24 max-w-5xl'}>
                <BlogImagesTab />
              </div>
            </div>
          </>
        }
        scroll={isMobile ? "normal" : "content"}
      />
    </FormProvider>
  );
}

export default withReducer("users", reducer)(Service);
