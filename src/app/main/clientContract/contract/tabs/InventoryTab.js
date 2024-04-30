import Button from "@mui/material/Button";
import NavLinkAdapter from "@fuse/core/NavLinkAdapter";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import FuseLoading from "@fuse/core/FuseLoading";
import _ from "@lodash";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import Box from "@mui/system/Box";
import { openDialog, closeDialog } from '../../../../store/fuse/dialogSlice';
import { selectUser } from "app/store/userSlice";
import {
  getContract,
  newContract,
  selectContractDB,
} from "../../store/contractSlice";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { alpha } from "@mui/material/styles";
import { DialogTitle, DialogActions, DialogContent, DialogContentText, Dialog, TextField, InputAdornment } from '@mui/material';
import axios from 'axios';
import { toast } from "react-toastify";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
  startDate: yup.string().required("You must enter the start Date"),
  endDate: yup.string().required("You must enter the start Date"),
  linkToDrive: yup
    .string()
    .required("You must enter the link")
    .min(10, "The link must be at least 10 characters"),
  clientId: yup
    .number()
    .positive("only positive ID")
    .required("You must enter the ID")
    .min(10, "The ID must be at least 10 characters"),
});

function UserTab(props) {
  const contact = useSelector(selectContractDB);
  const routeParams = useParams();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [servicesArr, setservicesArr] = useState([])
  const { contractId } = routeParams;
  const { control, watch, reset, handleSubmit, formState, getValues } = useForm(
    {
      mode: "onChange",
      resolver: yupResolver(schema),
    }
  );
  function confirmMESSAGES() {
    dispatch(
      openDialog({
        children: (
          <>
          <Dialog
          fullWidth={true}
          maxWidth={true}
          open={true}
          onClose={closeDialog}
          sx={{
            "& .MuiDialog-container": {
              "& .MuiPaper-root": {
                width: "100%",
                maxWidth: "800px",  // Set your width here
              },
            },
          }}
          >
            <DialogTitle id="alert-dialog-title pt-36" style={{color:'#f4b231'}}>
            <Typography variant="h4" align="center">CONTRACT TRANSACTIONS</Typography>
            </DialogTitle>
            <DialogContent>
            {contact.contractMsg.map((element) => {
                        return (
                          <>
                          {
                            element.urgent == true ? 
                            <DialogContentText style={{color:'red'}}>
                              <Typography variant="h5" align="center">{element.message}</Typography>
                            </DialogContentText>
                            :
                            <DialogContentText style={{color:'green'}}>
                               <Typography variant="h5" align="center">{element.message}</Typography>
                            </DialogContentText>
                          }
                           
                          </>
                        );
                      })}
            </DialogContent>
            <DialogActions>
              <Button onClick={() => dispatch(closeDialog())} color="secondary">
                Close
              </Button>
            </DialogActions>
          </Dialog>
          </>
        ),
      })
    );
  }
  function requestExtra() {
    dispatch(
      openDialog({
        children: (
          <>
          <Dialog
          fullWidth={true}
          maxWidth={true}
          open={true}
          onClose={closeDialog}
          sx={{
            "& .MuiDialog-container": {
              "& .MuiPaper-root": {
                width: "100%",
                maxWidth: "800px",  // Set your width here
              },
            },
          }}
          >
            <DialogTitle id="alert-dialog-title pt-36" style={{color:'#f4b231'}}>
            <Typography variant="h4" align="center">Request Extra Service</Typography>
            </DialogTitle>
            <DialogContent className="pt-16">

          <form action="/" method="POST" className="pt-16" onSubmit={async(e) => { e.preventDefault(); 
            const response = await axios.post(`https://www.api.mavenevents.ae/api/contractExtraService`, {
              contractId: contact.id,
              name: e.target.value
            },{
              headers: {
                access_token:  window.localStorage.getItem('access_token'),
                email: user.email,
                username:  user.username,
                id: user.id,
              },
            })
            if (Array.isArray(response.data.error)) {
              // eslint-disable-next-line no-plusplus
              for (let i = 0; i < response.data.error.length; i++) {
                toast.error(response.data.error[i].msg.message, {
                  position: "bottom-right",
                   draggable: false 
                })
              }
            }
            console.log(response);} }>
          <TextField
          label="Extra Service"
          variant="outlined"
          style={{width:'700px'}}
          InputProps={{
                 startAdornment: (
                   <InputAdornment position="start">
                     <FuseSvgIcon size={20}>material-outline:edit_note</FuseSvgIcon>
                   </InputAdornment>
                 ),
               }}
          id="serviceTEXTFIELD"
          select
          SelectProps={{
            native: true,
          }}
        >
          {servicesArr.map((option) => (
            <option key={option.name} value={option.name} >
              {option.name}
            </option>
          ))}
        </TextField>

        </form>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => dispatch(closeDialog())} color="secondary">
                Close
              </Button>
              <Button type="submit" onClick={async(e) => {
                e.preventDefault(); 
                const response = await axios.post(`https://www.api.mavenevents.ae/api/contractExtraService`, {
                  contractId: contact.id,
                  serviceName: document.getElementById("serviceTEXTFIELD").value
                },{
                  headers: {
                    access_token:  window.localStorage.getItem('access_token'),
                    email: user.email,
                    username:  user.username,
                    id: user.id,
                  },
                })
                if (Array.isArray(response.data.error)) {
                  // eslint-disable-next-line no-plusplus
                  for (let i = 0; i < response.data.error.length; i++) {
                    toast.error(response.data.error[i].msg.message, {
                      position: "bottom-right",
                       draggable: false 
                    })
                  }
                }
                dispatch(closeDialog())
              }} color="secondary">
                Submit
              </Button>
              <a
              href="https://wa.me/971524867771" target="_blank" style={{borderBottom:'0px', background:'transparent'}}>
              <Button onClick={() => dispatch(closeDialog())} color="secondary">
                Or Contact Us
              </Button>
              </a>
            </DialogActions>
          </Dialog>
          </>
        ),
      })
    );
  }
  async function getData(){
    const response = await axios.get(`https://www.api.mavenevents.ae/api/services`, {
      headers: {
        access_token:  window.localStorage.getItem('access_token'),
        email: user.email,
        username:  user.username,
        id: user.id,
      },
    })
    if (Array.isArray(response.data.error)) {
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < response.data.error.length; i++) {
        toast.error(response.data.error[i].msg.message, {
          position: "bottom-right",
           draggable: false 
        })
      }
    }
    setservicesArr(response.data)
  }
  useEffect(() => {
    if (routeParams.contractId === "new") {
      dispatch(newContract());
    } else {
      dispatch(
        getContract({
          access_token: window.localStorage.getItem("access_token"),
          email: user.email,
          id: user.id,
          username: user.username,
          contractId,
        })
      );
      if (contact.contractMsg[0]) {
        
        confirmMESSAGES()
      }
      getData()

      
    }
  }, [dispatch, routeParams, user]);

  return (
    <>
      <div className="inline-block p-24 sm:p-40 text-left print:p-0 w-full overflow-auto">
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ bounceDamping: 0 }}
        >
          <Card className="w-[110rem] p-64 mx-auto rounded-2xl shadow print:w-auto print:rounded-none print:shadow-none print:bg-transparent">
            <Box
              sx={{
                borderWidth: 4,
                borderStyle: "solid",
                borderColor: "#825a0a",
              }}
              style={{ borderRadius: "10px" }}
            >
              <CardContent className="p-36">
                <div className="flex items-start justify-between">
                  <Box
                    sx={{
                      backgroundColor: "#1d1f1f",
                      color: "#ffffff",
                    }}
                    className="grid auto-cols-max grid-flow-col gap-x-32  py-2 px-32 rounded-xl"
                  >
                    <Box
                      className="pr-40 border-r text-md"
                      sx={{
                        borderColor: (theme) =>
                          alpha(
                            theme.palette.getContrastText(
                              theme.palette.primary.dark
                            ),
                            0.25
                          ),
                      }}
                    >
                      <Typography
                        className="font-medium py-1"
                        color="text.secondary"
                      >
                        {user.name.length > 18
                          ? `${user.name.slice(0, 18)}..`
                          : `${user.name}`}
                        .
                      </Typography>
                      <Typography
                        className="font-medium py-1"
                        color="text.secondary"
                      >
                        {user.address.length > 20
                          ? `${user.address.slice(0, 20)}..`
                          : `${user.address}`}
                        .
                      </Typography>
                      <Typography
                        className="font-medium py-1"
                        color="text.secondary"
                      >
                        Abu Dhabi, UAE.
                      </Typography>
                      <Typography
                        className="font-medium py-1"
                        color="text.secondary"
                      >
                        +971 {user.phone}
                      </Typography>
                      <Typography
                        className="underline font-medium py-1 pb-2"
                        color="text.secondary"
                      >
                        {user.email.length > 20
                          ? `${user.email.slice(0, 20)}..`
                          : `${user.email}`}
                        .
                      </Typography>
                    </Box>
                    <div className="place-self-center w-80">
                      {user.logoFile === "" ? (
                        <img
                          className="w-80 items-center"
                          src="/assets/images/logo/sss.png"
                          alt="logo"
                          style={{ borderRadius: "50%" }}
                        />
                      ) : (
                        <img
                          className="w-80 items-center"
                          src={`https://www.api.mavenevents.ae/client/${user.logoFile}`}
                          alt="logo"
                        />
                      )}
                    </div>
                  </Box>

                  <Box
                    sx={{
                      backgroundColor: "#1d1f1f",
                      color: "#ffffff",
                    }}
                    className="grid auto-cols-max grid-flow-col gap-x-32  py-2 px-32 rounded-xl"
                  >
                    <div className="place-self-center w-80">
                      <img
                        className="w-96"
                        src="assets/images/logo/1-removebg-preview.jpg"
                        alt="logo"
                      />
                    </div>
                    <Box
                      className="pl-40 border-l text-md"
                      sx={{
                        borderColor: (theme) =>
                          alpha(
                            theme.palette.getContrastText(
                              theme.palette.primary.dark
                            ),
                            0.25
                          ),
                      }}
                    >
                      <Typography
                        className="font-medium py-1"
                        color="text.secondary"
                      >
                        Maven Events.
                      </Typography>
                      <Typography
                        className="font-medium py-1"
                        color="text.secondary"
                      >
                        Ideedah Street 31,
                      </Typography>
                      <Typography
                        className="font-medium py-1"
                        color="text.secondary"
                      >
                        Abu Dhabi, UAE.
                      </Typography>
                      <Typography
                        className="font-medium py-1"
                        color="text.secondary"
                      >
                        +971 52 486 7771
                      </Typography>
                      <Typography
                        className="underline font-medium py-1 pb-2"
                        color="text.secondary"
                      >
                        info@mavenevents.ae
                      </Typography>
                    </Box>
                  </Box>
                </div>

                <div
                  className="col-span-12 my-16 border-b"
                  style={{ color: "#825a0a" }}
                />
                <div className="flex items-center content-center justify-center underline decoration-[#97A3B6] decoration-1 underline-offset-8 mb-24">
                  <Typography
                    className="text-7xl tracking-tight"
                    color="text.secondary"
                  >
                    CONTRACT&nbsp;
                  </Typography>
                  <Typography className="text-7xl">#{contact.id}</Typography>
                </div>
                <div className="grid grid-cols-2 gap-x-4 mt-24 auto-cols-max">
                  <div
                    className="col-span-9 font-medium text-md mb-2"
                    style={{ color: "#94A3B8" }}
                  >
                    TITLE
                  </div>
                  <div
                    className="font-medium text-md text-right mb-2"
                    style={{ color: "#ffffff" }}
                  >
                    {contact.title ? contact.title : "-"}
                  </div>
                  <div
                    className="col-span-9 font-medium text-md mb-2"
                    style={{ color: "#94A3B8" }}
                  >
                    START DATE
                  </div>
                  <div
                    className="font-medium text-md text-right mb-2"
                    style={{ color: "#ffffff" }}
                  >
                    {contact.startDate ? contact.startDate : "-"}
                  </div>
                  <div
                    className="col-span-9 font-medium text-md mb-2"
                    style={{ color: "#94A3B8" }}
                  >
                    DUE DATE
                  </div>
                  <div
                    className="font-medium text-md text-right mb-2"
                    style={{ color: "#ffffff" }}
                  >
                    {contact.endDate ? contact.endDate : "-"}
                  </div>
                  <div
                    className="col-span-9 font-medium text-md mb-2"
                    style={{ color: "#94A3B8" }}
                  >
                    N# MONTHS
                  </div>
                  <div
                    className="font-medium text-md text-right mb-2"
                    style={{ color: "#ffffff" }}
                  >
                    {contact.months ? contact.months : "-"}
                  </div>
                  <div
                    className="col-span-9 font-medium text-md mb-2"
                    style={{ color: "#94A3B8" }}
                  >
                    CLOUD LINK
                  </div>
                  <div
                    className="font-medium text-md text-right mb-2"
                    style={{ color: "#ffffff" }}
                  >
                    <Typography className="font-medium underline">
                      <a
                        href={contact.linkToDrive}
                        target="_blank"
                        className="underline text-right "
                        style={{ background: "#181818" }}
                      >
                        Click here!
                      </a>
                    </Typography>
                  </div>

                  <div className="col-span-10 my-8" />
                </div>
                {(!contact.services[0]) && (
                   <>
                   <div
                     className=" flex items-center justify-center"
                     style={{ color: "#94A3B8", fontSize: "25px" }}
                   >
                     There is No contract Agreements Right now.
                   </div>
                   <div className="col-span-12 mt-64" />
                 </>
                )}
                {contact.services[0] && (
                  <>
                    <div
                      className=""
                      style={{ color: "#94A3B8", fontSize: "25px" }}
                    >
                      CONTRACT AGREEMENTS:
                    </div>
                    <div className="grid grid-cols-11 gap-x-4 mt-16">
                      <div
                        className="col-span-9 font-medium text-md"
                        style={{ color: "#94A3B8" }}
                      >
                        AGREEMENT / MONTH
                      </div>
                      <div
                        className="font-medium text-md text-center"
                        style={{ color: "#94A3B8" }}
                      >
                        STATUS
                      </div>
                      <div
                        className="font-medium text-md text-center"
                        style={{ color: "#94A3B8" }}
                      >
                        QTY/MONTH
                      </div>

                      <div className="col-span-11 mt-16 border-b" />
                      {contact.services.map((element) => {
                        return (
                          <>
                            <div className="col-span-9 text-lg font-medium mt-12">
                              {element.serviceName}
                            </div>
                            <div
                              className="self-center text-center"
                              style={{ color: "#58ed13" }}
                            >
                              <div
                                style={{ fontSize: "30px", color: "#58ed13" }}
                              >
                                &#10003;
                              </div>
                            </div>
                            <div className="col-span-1 text-lg font-medium text-center mt-12" style={{ color: "#58ed13" }}>
                              {element.quantity}
                            </div>

                            <div className="col-span-12 my-10 border-b" />
                          </>
                        );
                      })}
                    </div>
                    <div className="col-span-12 mt-20" />
                  </>
                )}
                 {!contact.january[0] &&
                  !contact.february[0] &&
                  !contact.march[0] &&
                  !contact.april[0] &&
                  !contact.may[0] &&
                  !contact.june[0] &&
                  !contact.july[0] &&
                  !contact.august[0] &&
                  !contact.september[0] &&
                  !contact.october[0] &&
                  !contact.november[0] &&
                  !contact.december[0] && (
                    <>
                      <div
                        className=" flex items-center justify-center"
                        style={{ color: "#94A3B8", fontSize: "20px" }}
                      >
                        There is No contract Details Right now.
                      </div>
                      <div className="col-span-12 mt-64" />
                    </>
                  )}  
<div className="flex items-center content-center justify-center mb-24">
                  <Typography
                    className=" tracking-tight bg-maven"
                    color="text.secondary"
                    style={{borderRadius:'20px'}}
                  >
                   <Button className="justify-center content-center px-14" onClick={confirmMESSAGES} style={{color:'black'}}>
                  view Transactions
                </Button>
                  </Typography>
                  <div className="pl-32">
                  <Typography
                     className=" tracking-tight bg-maven "
                     color="text.secondary"
                     style={{borderRadius:'20px'}}
                     >
                   <Button className="justify-center content-center px-14" onClick={requestExtra} style={{color:'black'}}>
                  Request Extra Service
                </Button>
                  </Typography>
                    </div>
                </div>
                {(contact.january[0] ||
                  contact.february[0] ||
                  contact.march[0] ||
                  contact.april[0] ||
                  contact.may[0] ||
                  contact.june[0] ||
                  contact.july[0] ||
                  contact.august[0] ||
                  contact.september[0] ||
                  contact.october[0] ||
                  contact.november[0] ||
                  contact.december[0]) && (
                  <>
                    <div
                      className="pb-20"
                      style={{ color: "#94A3B8", fontSize: "25px" }}
                    >
                      CONTRACT DETAILS:
                    </div>
                  </>
                )}
                {contact.december[0] && (
                  <>
                    <Box
                      sx={{
                        borderWidth: 4,
                        borderStyle: "solid",
                        borderColor: "#323333",
                      }}
                      style={{ borderRadius: "10px" }}
                      className="p-20 pb-28 pt-10"
                    >
                      <div className="flex justify-center items-center ">
                        <div className="text-3xl p-6 text-[#f4b231]">
                          DECEMBER
                        </div>
                      </div>
                      <div className="grid grid-cols-12 gap-x-4 mt-24">
                        <div
                          className="col-span-8 font-medium text-md"
                          style={{ color: "#94A3B8" }}
                        >
                          SERVICE
                        </div>
                        <div
                          className="font-medium text-md text-center"
                          style={{ color: "#94A3B8" }}
                        >
                          CONTRACT
                        </div>
                        <div
                          className=" col-span-2  font-medium text-md text-center"
                          style={{ color: "#94A3B8" }}
                        >
                          DELIVERED
                        </div>
                        <div
                          className="font-medium text-md text-center "
                          style={{ color: "#ff0000" }}
                        >
                          EXTRA
                        </div>

                        <div className="col-span-12 my-16 border-b" />
                        {contact.december.map((element) => {
                          return (
                            <>
                              <Typography className="col-span-8 text-lg font-medium">
                                {element.serviceName}
                              </Typography>
                              <Typography className="self-center text-center">
                                &nbsp;&nbsp;{element.quantity}
                              </Typography>
                              <Typography className="col-span-2  self-center text-center">
                                {element.delivered}
                              </Typography>
                              <Typography
                                className="self-center text-center"
                                style={{ color: "#ff0000" }}
                              >
                                {element.extra}
                              </Typography>

                              <div className="col-span-12 my-16 border-b" />
                            </>
                          );
                        })}
                        {contact.decemberService[0] && (
                          <>
                            <div className="col-span-12 mt-14" />

                            <div className="col-span-2" />
                            <div
                              className="col-span-1 font-medium text-md "
                              style={{ color: "#94A3B8" }}
                            >
                              BENEFITS
                            </div>
                            <div className="col-span-3" />
                            <div className="col-span-3" />
                            <div
                              className="col-span-1  font-medium text-md text-center"
                              style={{ color: "#94A3B8" }}
                            >
                              STATUS
                            </div>
                            <div className="col-span-2" />
                            <div className="col-span-2" />
                            <div className="col-span-8 my-8 border-b" />
                            <div className="col-span-2" />
                            {contact.decemberService.map((element) => {
                              return (
                                <>
                                  <div className="col-span-12" />
                                  <div className="col-span-2" />

                                  <div className="col-span-1 text-lg font-medium text-left">
                                    {element.serviceName}
                                  </div>

                                  <div className="col-span-3" />
                                  <div className="col-span-3" />

                                  <div
                                    className="col-span-1 self-center text-center"
                                    style={{ color: "#58ed13" }}
                                  >
                                    {element.quantity == 0 ? (
                                      <div
                                        className="self-center text-center"
                                        style={{ color: "#58ed13" }}
                                      >
                                        Active
                                      </div>
                                    ) : (
                                      element.quantity
                                    )}
                                  </div>
                                  <div className="col-span-2" />
                                  <div className="col-span-2" />
                                  <div className="col-span-8 my-8 " />
                                  <div className="col-span-2" />
                                </>
                              );
                            })}
                          </>
                        )}
                      </div>
                    </Box>
                    <div className="col-span-12 mt-64" />
                  </>
                )}
                {contact.november[0] && (
                  <>
                    <Box
                      sx={{
                        borderWidth: 4,
                        borderStyle: "solid",
                        borderColor: "#323333",
                      }}
                      style={{ borderRadius: "10px" }}
                      className="p-20 pb-28 pt-10"
                    >
                      <div className="flex justify-center items-center ">
                        <div className="text-3xl p-6 text-[#f4b231]">
                          NOVEMBER
                        </div>
                      </div>
                      <div className="grid grid-cols-12 gap-x-4 mt-24">
                        <div
                          className="col-span-8 font-medium text-md"
                          style={{ color: "#94A3B8" }}
                        >
                          SERVICE
                        </div>
                        <div
                          className="font-medium text-md text-center"
                          style={{ color: "#94A3B8" }}
                        >
                          CONTRACT
                        </div>
                        <div
                          className=" col-span-2  font-medium text-md text-center"
                          style={{ color: "#94A3B8" }}
                        >
                          DELIVERED
                        </div>
                        <div
                          className="font-medium text-md text-center "
                          style={{ color: "#ff0000" }}
                        >
                          EXTRA
                        </div>

                        <div className="col-span-12 my-16 border-b" />
                        {contact.november.map((element) => {
                          return (
                            <>
                              <Typography className="col-span-8 text-lg font-medium">
                                {element.serviceName}
                              </Typography>
                              <Typography className="self-center text-center">
                                &nbsp;&nbsp;{element.quantity}
                              </Typography>
                              <Typography className="col-span-2  self-center text-center">
                                {element.delivered}
                              </Typography>
                              <Typography
                                className="self-center text-center"
                                style={{ color: "#ff0000" }}
                              >
                                {element.extra}
                              </Typography>

                              <div className="col-span-12 my-16 border-b" />
                            </>
                          );
                        })}
                        {contact.novemberService[0] && (
                          <>
                            <div className="col-span-12 mt-14" />

                            <div className="col-span-2" />
                            <div
                              className="col-span-1 font-medium text-md "
                              style={{ color: "#94A3B8" }}
                            >
                              BENEFITS
                            </div>
                            <div className="col-span-3" />
                            <div className="col-span-3" />
                            <div
                              className="col-span-1  font-medium text-md text-center"
                              style={{ color: "#94A3B8" }}
                            >
                              STATUS
                            </div>
                            <div className="col-span-2" />
                            <div className="col-span-2" />
                            <div className="col-span-8 my-8 border-b" />
                            <div className="col-span-2" />
                            {contact.novemberService.map((element) => {
                              return (
                                <>
                                  <div className="col-span-12" />
                                  <div className="col-span-2" />

                                  <div className="col-span-1 text-lg font-medium text-left">
                                    {element.serviceName}
                                  </div>

                                  <div className="col-span-3" />
                                  <div className="col-span-3" />

                                  <div
                                    className="col-span-1 self-center text-center"
                                    style={{ color: "#58ed13" }}
                                  >
                                    {element.quantity == 0 ? (
                                      <div
                                        className="self-center text-center"
                                        style={{ color: "#58ed13" }}
                                      >
                                        Active
                                      </div>
                                    ) : (
                                      element.quantity
                                    )}
                                  </div>
                                  <div className="col-span-2" />
                                  <div className="col-span-2" />
                                  <div className="col-span-8 my-8 " />
                                  <div className="col-span-2" />
                                </>
                              );
                            })}
                          </>
                        )}
                      </div>
                    </Box>
                    <div className="col-span-12 mt-64" />
                  </>
                )}
                {contact.october[0] && (
                  <>
                    <Box
                      sx={{
                        borderWidth: 4,
                        borderStyle: "solid",
                        borderColor: "#323333",
                      }}
                      style={{ borderRadius: "10px" }}
                      className="p-20 pb-28 pt-10"
                    >
                      <div className="flex justify-center items-center ">
                        <div className="text-3xl p-6 text-[#f4b231]">
                          OCTOBER
                        </div>
                      </div>
                      <div className="grid grid-cols-12 gap-x-4 mt-24">
                        <div
                          className="col-span-8 font-medium text-md"
                          style={{ color: "#94A3B8" }}
                        >
                          SERVICE
                        </div>
                        <div
                          className="font-medium text-md text-center"
                          style={{ color: "#94A3B8" }}
                        >
                          CONTRACT
                        </div>
                        <div
                          className=" col-span-2  font-medium text-md text-center"
                          style={{ color: "#94A3B8" }}
                        >
                          DELIVERED
                        </div>
                        <div
                          className="font-medium text-md text-center "
                          style={{ color: "#ff0000" }}
                        >
                          EXTRA
                        </div>

                        <div className="col-span-12 my-16 border-b" />
                        {contact.october.map((element) => {
                          return (
                            <>
                              <Typography className="col-span-8 text-lg font-medium">
                                {element.serviceName}
                              </Typography>
                              <Typography className="self-center text-center">
                                &nbsp;&nbsp;{element.quantity}
                              </Typography>
                              <Typography className="col-span-2  self-center text-center">
                                {element.delivered}
                              </Typography>
                              <Typography
                                className="self-center text-center"
                                style={{ color: "#ff0000" }}
                              >
                                {element.extra}
                              </Typography>

                              <div className="col-span-12 my-16 border-b" />
                            </>
                          );
                        })}
                        {contact.octoberService[0] && (
                          <>
                            <div className="col-span-12 mt-14" />

                            <div className="col-span-2" />
                            <div
                              className="col-span-1 font-medium text-md "
                              style={{ color: "#94A3B8" }}
                            >
                              BENEFITS
                            </div>
                            <div className="col-span-3" />
                            <div className="col-span-3" />
                            <div
                              className="col-span-1  font-medium text-md text-center"
                              style={{ color: "#94A3B8" }}
                            >
                              STATUS
                            </div>
                            <div className="col-span-2" />
                            <div className="col-span-2" />
                            <div className="col-span-8 my-8 border-b" />
                            <div className="col-span-2" />
                            {contact.octoberService.map((element) => {
                              return (
                                <>
                                  <div className="col-span-12" />
                                  <div className="col-span-2" />

                                  <div className="col-span-1 text-lg font-medium text-left">
                                    {element.serviceName}
                                  </div>

                                  <div className="col-span-3" />
                                  <div className="col-span-3" />

                                  <div
                                    className="col-span-1 self-center text-center"
                                    style={{ color: "#58ed13" }}
                                  >
                                    {element.quantity == 0 ? (
                                      <div
                                        className="self-center text-center"
                                        style={{ color: "#58ed13" }}
                                      >
                                        Active
                                      </div>
                                    ) : (
                                      element.quantity
                                    )}
                                  </div>
                                  <div className="col-span-2" />
                                  <div className="col-span-2" />
                                  <div className="col-span-8 my-8 " />
                                  <div className="col-span-2" />
                                </>
                              );
                            })}
                          </>
                        )}
                      </div>
                    </Box>
                    <div className="col-span-12 mt-64" />
                  </>
                )}
                {contact.september[0] && (
                  <>
                    <Box
                      sx={{
                        borderWidth: 4,
                        borderStyle: "solid",
                        borderColor: "#323333",
                      }}
                      style={{ borderRadius: "10px" }}
                      className="p-20 pb-28 pt-10"
                    >
                      <div className="flex justify-center items-center ">
                        <div className="text-3xl p-6 text-[#f4b231]">
                          SEPTEMBER
                        </div>
                      </div>
                      <div className="grid grid-cols-12 gap-x-4 mt-24">
                        <div
                          className="col-span-8 font-medium text-md"
                          style={{ color: "#94A3B8" }}
                        >
                          SERVICE
                        </div>
                        <div
                          className="font-medium text-md text-center"
                          style={{ color: "#94A3B8" }}
                        >
                          CONTRACT
                        </div>
                        <div
                          className=" col-span-2  font-medium text-md text-center"
                          style={{ color: "#94A3B8" }}
                        >
                          DELIVERED
                        </div>
                        <div
                          className="font-medium text-md text-center "
                          style={{ color: "#ff0000" }}
                        >
                          EXTRA
                        </div>

                        <div className="col-span-12 my-16 border-b" />
                        {contact.september.map((element) => {
                          return (
                            <>
                              <Typography className="col-span-8 text-lg font-medium">
                                {element.serviceName}
                              </Typography>
                              <Typography className="self-center text-center">
                                &nbsp;&nbsp;{element.quantity}
                              </Typography>
                              <Typography className="col-span-2  self-center text-center">
                                {element.delivered}
                              </Typography>
                              <Typography
                                className="self-center text-center"
                                style={{ color: "#ff0000" }}
                              >
                                {element.extra}
                              </Typography>

                              <div className="col-span-12 my-16 border-b" />
                            </>
                          );
                        })}
                        {contact.septemberService[0] && (
                          <>
                            <div className="col-span-12 mt-14" />

                            <div className="col-span-2" />
                            <div
                              className="col-span-1 font-medium text-md "
                              style={{ color: "#94A3B8" }}
                            >
                              BENEFITS
                            </div>
                            <div className="col-span-3" />
                            <div className="col-span-3" />
                            <div
                              className="col-span-1  font-medium text-md text-center"
                              style={{ color: "#94A3B8" }}
                            >
                              STATUS
                            </div>
                            <div className="col-span-2" />
                            <div className="col-span-2" />
                            <div className="col-span-8 my-8 border-b" />
                            <div className="col-span-2" />
                            {contact.septemberService.map((element) => {
                              return (
                                <>
                                  <div className="col-span-12" />
                                  <div className="col-span-2" />

                                  <div className="col-span-1 text-lg font-medium text-left">
                                    {element.serviceName}
                                  </div>

                                  <div className="col-span-3" />
                                  <div className="col-span-3" />

                                  <div
                                    className="col-span-1 self-center text-center"
                                    style={{ color: "#58ed13" }}
                                  >
                                    {element.quantity == 0 ? (
                                      <div
                                        className="self-center text-center"
                                        style={{ color: "#58ed13" }}
                                      >
                                        Active
                                      </div>
                                    ) : (
                                      element.quantity
                                    )}
                                  </div>
                                  <div className="col-span-2" />
                                  <div className="col-span-2" />
                                  <div className="col-span-8 my-8 " />
                                  <div className="col-span-2" />
                                </>
                              );
                            })}
                          </>
                        )}
                      </div>
                    </Box>
                    <div className="col-span-12 mt-64" />
                  </>
                )}
                {contact.august[0] && (
                  <>
                    <Box
                      sx={{
                        borderWidth: 4,
                        borderStyle: "solid",
                        borderColor: "#323333",
                      }}
                      style={{ borderRadius: "10px" }}
                      className="p-20 pb-28 pt-10"
                    >
                      <div className="flex justify-center items-center ">
                        <div className="text-3xl p-6 text-[#f4b231]">
                          AUGUST
                        </div>
                      </div>
                      <div className="grid grid-cols-12 gap-x-4 mt-24">
                        <div
                          className="col-span-8 font-medium text-md"
                          style={{ color: "#94A3B8" }}
                        >
                          SERVICE
                        </div>
                        <div
                          className="font-medium text-md text-center"
                          style={{ color: "#94A3B8" }}
                        >
                          CONTRACT
                        </div>
                        <div
                          className=" col-span-2  font-medium text-md text-center"
                          style={{ color: "#94A3B8" }}
                        >
                          DELIVERED
                        </div>
                        <div
                          className="font-medium text-md text-center "
                          style={{ color: "#ff0000" }}
                        >
                          EXTRA
                        </div>

                        <div className="col-span-12 my-16 border-b" />
                        {contact.august.map((element) => {
                          return (
                            <>
                              <Typography className="col-span-8 text-lg font-medium">
                                {element.serviceName}
                              </Typography>
                              <Typography className="self-center text-center">
                                &nbsp;&nbsp;{element.quantity}
                              </Typography>
                              <Typography className="col-span-2  self-center text-center">
                                {element.delivered}
                              </Typography>
                              <Typography
                                className="self-center text-center"
                                style={{ color: "#ff0000" }}
                              >
                                {element.extra}
                              </Typography>

                              <div className="col-span-12 my-16 border-b" />
                            </>
                          );
                        })}
                        {contact.augustService[0] && (
                          <>
                            <div className="col-span-12 mt-14" />

                            <div className="col-span-2" />
                            <div
                              className="col-span-1 font-medium text-md "
                              style={{ color: "#94A3B8" }}
                            >
                              BENEFITS
                            </div>
                            <div className="col-span-3" />
                            <div className="col-span-3" />
                            <div
                              className="col-span-1  font-medium text-md text-center"
                              style={{ color: "#94A3B8" }}
                            >
                              STATUS
                            </div>
                            <div className="col-span-2" />
                            <div className="col-span-2" />
                            <div className="col-span-8 my-8 border-b" />
                            <div className="col-span-2" />
                            {contact.augustService.map((element) => {
                              return (
                                <>
                                  <div className="col-span-12" />
                                  <div className="col-span-2" />

                                  <div className="col-span-1 text-lg font-medium text-left">
                                    {element.serviceName}
                                  </div>

                                  <div className="col-span-3" />
                                  <div className="col-span-3" />

                                  <div
                                    className="col-span-1 self-center text-center"
                                    style={{ color: "#58ed13" }}
                                  >
                                    {element.quantity == 0 ? (
                                      <div
                                        className="self-center text-center"
                                        style={{ color: "#58ed13" }}
                                      >
                                        Active
                                      </div>
                                    ) : (
                                      element.quantity
                                    )}
                                  </div>
                                  <div className="col-span-2" />
                                  <div className="col-span-2" />
                                  <div className="col-span-8 my-8 " />
                                  <div className="col-span-2" />
                                </>
                              );
                            })}
                          </>
                        )}
                      </div>
                    </Box>
                    <div className="col-span-12 mt-64" />
                  </>
                )}
                {contact.july[0] && (
                  <>
                    <Box
                      sx={{
                        borderWidth: 4,
                        borderStyle: "solid",
                        borderColor: "#323333",
                      }}
                      style={{ borderRadius: "10px" }}
                      className="p-20 pb-28 pt-10"
                    >
                      <div className="flex justify-center items-center ">
                        <div className="text-3xl p-6 text-[#f4b231]">JULY</div>
                      </div>
                      <div className="grid grid-cols-12 gap-x-4 mt-24">
                        <div
                          className="col-span-8 font-medium text-md"
                          style={{ color: "#94A3B8" }}
                        >
                          SERVICE
                        </div>
                        <div
                          className="font-medium text-md text-center"
                          style={{ color: "#94A3B8" }}
                        >
                          CONTRACT
                        </div>
                        <div
                          className=" col-span-2  font-medium text-md text-center"
                          style={{ color: "#94A3B8" }}
                        >
                          DELIVERED
                        </div>
                        <div
                          className="font-medium text-md text-center "
                          style={{ color: "#ff0000" }}
                        >
                          EXTRA
                        </div>

                        <div className="col-span-12 my-16 border-b" />
                        {contact.july.map((element) => {
                          return (
                            <>
                              <Typography className="col-span-8 text-lg font-medium">
                                {element.serviceName}
                              </Typography>
                              <Typography className="self-center text-center">
                                &nbsp;&nbsp;{element.quantity}
                              </Typography>
                              <Typography className="col-span-2  self-center text-center">
                                {element.delivered}
                              </Typography>
                              <Typography
                                className="self-center text-center"
                                style={{ color: "#ff0000" }}
                              >
                                {element.extra}
                              </Typography>

                              <div className="col-span-12 my-16 border-b" />
                            </>
                          );
                        })}
                        {contact.julyService[0] && (
                          <>
                            <div className="col-span-12 mt-14" />

                            <div className="col-span-2" />
                            <div
                              className="col-span-1 font-medium text-md "
                              style={{ color: "#94A3B8" }}
                            >
                              BENEFITS
                            </div>
                            <div className="col-span-3" />
                            <div className="col-span-3" />
                            <div
                              className="col-span-1  font-medium text-md text-center"
                              style={{ color: "#94A3B8" }}
                            >
                              STATUS
                            </div>
                            <div className="col-span-2" />
                            <div className="col-span-2" />
                            <div className="col-span-8 my-8 border-b" />
                            <div className="col-span-2" />
                            {contact.julyService.map((element) => {
                              return (
                                <>
                                  <div className="col-span-12" />
                                  <div className="col-span-2" />

                                  <div className="col-span-1 text-lg font-medium text-left">
                                    {element.serviceName}
                                  </div>

                                  <div className="col-span-3" />
                                  <div className="col-span-3" />

                                  <div
                                    className="col-span-1 self-center text-center"
                                    style={{ color: "#58ed13" }}
                                  >
                                    {element.quantity == 0 ? (
                                      <div
                                        className="self-center text-center"
                                        style={{ color: "#58ed13" }}
                                      >
                                        Active
                                      </div>
                                    ) : (
                                      element.quantity
                                    )}
                                  </div>
                                  <div className="col-span-2" />
                                  <div className="col-span-2" />
                                  <div className="col-span-8 my-8 " />
                                  <div className="col-span-2" />
                                </>
                              );
                            })}
                          </>
                        )}
                      </div>
                    </Box>
                    <div className="col-span-12 mt-64" />
                  </>
                )}
                {contact.june[0] && (
                  <>
                    <Box
                      sx={{
                        borderWidth: 4,
                        borderStyle: "solid",
                        borderColor: "#323333",
                      }}
                      style={{ borderRadius: "10px" }}
                      className="p-20 pb-28 pt-10"
                    >
                      <div className="flex justify-center items-center ">
                        <div className="text-3xl p-6 text-[#f4b231]">JUNE</div>
                      </div>
                      <div className="grid grid-cols-12 gap-x-4 mt-24">
                        <div
                          className="col-span-8 font-medium text-md"
                          style={{ color: "#94A3B8" }}
                        >
                          SERVICE
                        </div>
                        <div
                          className="font-medium text-md text-center"
                          style={{ color: "#94A3B8" }}
                        >
                          CONTRACT
                        </div>
                        <div
                          className=" col-span-2  font-medium text-md text-center"
                          style={{ color: "#94A3B8" }}
                        >
                          DELIVERED
                        </div>
                        <div
                          className="font-medium text-md text-center "
                          style={{ color: "#ff0000" }}
                        >
                          EXTRA
                        </div>

                        <div className="col-span-12 my-16 border-b" />
                        {contact.june.map((element) => {
                          return (
                            <>
                              <Typography className="col-span-8 text-lg font-medium">
                                {element.serviceName}
                              </Typography>
                              <Typography className="self-center text-center">
                                &nbsp;&nbsp;{element.quantity}
                              </Typography>
                              <Typography className="col-span-2  self-center text-center">
                                {element.delivered}
                              </Typography>
                              <Typography
                                className="self-center text-center"
                                style={{ color: "#ff0000" }}
                              >
                                {element.extra}
                              </Typography>

                              <div className="col-span-12 my-16 border-b" />
                            </>
                          );
                        })}
                        {contact.juneService[0] && (
                          <>
                            <div className="col-span-12 mt-14" />

                            <div className="col-span-2" />
                            <div
                              className="col-span-1 font-medium text-md "
                              style={{ color: "#94A3B8" }}
                            >
                              BENEFITS
                            </div>
                            <div className="col-span-3" />
                            <div className="col-span-3" />
                            <div
                              className="col-span-1  font-medium text-md text-center"
                              style={{ color: "#94A3B8" }}
                            >
                              STATUS
                            </div>
                            <div className="col-span-2" />
                            <div className="col-span-2" />
                            <div className="col-span-8 my-8 border-b" />
                            <div className="col-span-2" />
                            {contact.juneService.map((element) => {
                              return (
                                <>
                                  <div className="col-span-12" />
                                  <div className="col-span-2" />

                                  <div className="col-span-1 text-lg font-medium text-left">
                                    {element.serviceName}
                                  </div>

                                  <div className="col-span-3" />
                                  <div className="col-span-3" />

                                  <div
                                    className="col-span-1 self-center text-center"
                                    style={{ color: "#58ed13" }}
                                  >
                                    {element.quantity == 0 ? (
                                      <div
                                        className="self-center text-center"
                                        style={{ color: "#58ed13" }}
                                      >
                                        Active
                                      </div>
                                    ) : (
                                      element.quantity
                                    )}
                                  </div>
                                  <div className="col-span-2" />
                                  <div className="col-span-2" />
                                  <div className="col-span-8 my-8 " />
                                  <div className="col-span-2" />
                                </>
                              );
                            })}
                          </>
                        )}
                      </div>
                    </Box>
                    <div className="col-span-12 mt-64" />
                  </>
                )}
                {contact.may[0] && (
                  <>
                    <Box
                      sx={{
                        borderWidth: 4,
                        borderStyle: "solid",
                        borderColor: "#323333",
                      }}
                      style={{ borderRadius: "10px" }}
                      className="p-20 pb-28 pt-10"
                    >
                      <div className="flex justify-center items-center ">
                        <div className="text-3xl p-6 text-[#f4b231]">MAY</div>
                      </div>
                      <div className="grid grid-cols-12 gap-x-4 mt-24">
                        <div
                          className="col-span-8 font-medium text-md"
                          style={{ color: "#94A3B8" }}
                        >
                          SERVICE
                        </div>
                        <div
                          className="font-medium text-md text-center"
                          style={{ color: "#94A3B8" }}
                        >
                          CONTRACT
                        </div>
                        <div
                          className=" col-span-2  font-medium text-md text-center"
                          style={{ color: "#94A3B8" }}
                        >
                          DELIVERED
                        </div>
                        <div
                          className="font-medium text-md text-center "
                          style={{ color: "#ff0000" }}
                        >
                          EXTRA
                        </div>

                        <div className="col-span-12 my-16 border-b" />
                        {contact.may.map((element) => {
                          return (
                            <>
                              <Typography className="col-span-8 text-lg font-medium">
                                {element.serviceName}
                              </Typography>
                              <Typography className="self-center text-center">
                                &nbsp;&nbsp;{element.quantity}
                              </Typography>
                              <Typography className="col-span-2  self-center text-center">
                                {element.delivered}
                              </Typography>
                              <Typography
                                className="self-center text-center"
                                style={{ color: "#ff0000" }}
                              >
                                {element.extra}
                              </Typography>

                              <div className="col-span-12 my-16 border-b" />
                            </>
                          );
                        })}
                        {contact.mayService[0] && (
                          <>
                            <div className="col-span-12 mt-14" />

                            <div className="col-span-2" />
                            <div
                              className="col-span-1 font-medium text-md "
                              style={{ color: "#94A3B8" }}
                            >
                              BENEFITS
                            </div>
                            <div className="col-span-3" />
                            <div className="col-span-3" />
                            <div
                              className="col-span-1  font-medium text-md text-center"
                              style={{ color: "#94A3B8" }}
                            >
                              STATUS
                            </div>
                            <div className="col-span-2" />
                            <div className="col-span-2" />
                            <div className="col-span-8 my-8 border-b" />
                            <div className="col-span-2" />
                            {contact.mayService.map((element) => {
                              return (
                                <>
                                  <div className="col-span-12" />
                                  <div className="col-span-2" />

                                  <div className="col-span-1 text-lg font-medium text-left">
                                    {element.serviceName}
                                  </div>

                                  <div className="col-span-3" />
                                  <div className="col-span-3" />

                                  <div
                                    className="col-span-1 self-center text-center"
                                    style={{ color: "#58ed13" }}
                                  >
                                    {element.quantity == 0 ? (
                                      <div
                                        className="self-center text-center"
                                        style={{ color: "#58ed13" }}
                                      >
                                        Active
                                      </div>
                                    ) : (
                                      element.quantity
                                    )}
                                  </div>
                                  <div className="col-span-2" />
                                  <div className="col-span-2" />
                                  <div className="col-span-8 my-8 " />
                                  <div className="col-span-2" />
                                </>
                              );
                            })}
                          </>
                        )}
                      </div>
                    </Box>
                    <div className="col-span-12 mt-64" />
                  </>
                )}
                {contact.april[0] && (
                  <>
                    <Box
                      sx={{
                        borderWidth: 4,
                        borderStyle: "solid",
                        borderColor: "#323333",
                      }}
                      style={{ borderRadius: "10px" }}
                      className="p-20 pb-28 pt-10"
                    >
                      <div className="flex justify-center items-center ">
                        <div className="text-3xl p-6 text-[#f4b231]">APRIL</div>
                      </div>
                      <div className="grid grid-cols-12 gap-x-4 mt-24">
                        <div
                          className="col-span-8 font-medium text-md"
                          style={{ color: "#94A3B8" }}
                        >
                          SERVICE
                        </div>
                        <div
                          className="font-medium text-md text-center"
                          style={{ color: "#94A3B8" }}
                        >
                          CONTRACT
                        </div>
                        <div
                          className=" col-span-2  font-medium text-md text-center"
                          style={{ color: "#94A3B8" }}
                        >
                          DELIVERED
                        </div>
                        <div
                          className="font-medium text-md text-center "
                          style={{ color: "#ff0000" }}
                        >
                          EXTRA
                        </div>

                        <div className="col-span-12 my-16 border-b" />
                        {contact.april.map((element) => {
                          return (
                            <>
                              <Typography className="col-span-8 text-lg font-medium">
                                {element.serviceName}
                              </Typography>
                              <Typography className="self-center text-center">
                                &nbsp;&nbsp;{element.quantity}
                              </Typography>
                              <Typography className="col-span-2  self-center text-center">
                                {element.delivered}
                              </Typography>
                              <Typography
                                className="self-center text-center"
                                style={{ color: "#ff0000" }}
                              >
                                {element.extra}
                              </Typography>

                              <div className="col-span-12 my-16 border-b" />
                            </>
                          );
                        })}
                        {contact.aprilService[0] && (
                          <>
                            <div className="col-span-12 mt-14" />

                            <div className="col-span-2" />
                            <div
                              className="col-span-1 font-medium text-md "
                              style={{ color: "#94A3B8" }}
                            >
                              BENEFITS
                            </div>
                            <div className="col-span-3" />
                            <div className="col-span-3" />
                            <div
                              className="col-span-1  font-medium text-md text-center"
                              style={{ color: "#94A3B8" }}
                            >
                              STATUS
                            </div>
                            <div className="col-span-2" />
                            <div className="col-span-2" />
                            <div className="col-span-8 my-8 border-b" />
                            <div className="col-span-2" />
                            {contact.aprilService.map((element) => {
                              return (
                                <>
                                  <div className="col-span-12" />
                                  <div className="col-span-2" />

                                  <div className="col-span-1 text-lg font-medium text-left">
                                    {element.serviceName}
                                  </div>

                                  <div className="col-span-3" />
                                  <div className="col-span-3" />

                                  <div
                                    className="col-span-1 self-center text-center"
                                    style={{ color: "#58ed13" }}
                                  >
                                    {element.quantity == 0 ? (
                                      <div
                                        className="self-center text-center"
                                        style={{ color: "#58ed13" }}
                                      >
                                        Active
                                      </div>
                                    ) : (
                                      element.quantity
                                    )}
                                  </div>
                                  <div className="col-span-2" />
                                  <div className="col-span-2" />
                                  <div className="col-span-8 my-8 " />
                                  <div className="col-span-2" />
                                </>
                              );
                            })}
                          </>
                        )}
                      </div>
                    </Box>
                    <div className="col-span-12 mt-64" />
                  </>
                )}
                {contact.march[0] && (
                  <>
                    <Box
                      sx={{
                        borderWidth: 4,
                        borderStyle: "solid",
                        borderColor: "#323333",
                      }}
                      style={{ borderRadius: "10px" }}
                      className="p-20 pb-28 pt-10"
                    >
                      <div className="flex justify-center items-center ">
                        <div className="text-3xl p-6 text-[#f4b231]">MARCH</div>
                      </div>
                      <div className="grid grid-cols-12 gap-x-4 mt-24">
                        <div
                          className="col-span-8 font-medium text-md"
                          style={{ color: "#94A3B8" }}
                        >
                          SERVICE
                        </div>
                        <div
                          className="font-medium text-md text-center"
                          style={{ color: "#94A3B8" }}
                        >
                          CONTRACT
                        </div>
                        <div
                          className=" col-span-2  font-medium text-md text-center"
                          style={{ color: "#94A3B8" }}
                        >
                          DELIVERED
                        </div>
                        <div
                          className="font-medium text-md text-center "
                          style={{ color: "#ff0000" }}
                        >
                          EXTRA
                        </div>

                        <div className="col-span-12 my-16 border-b" />
                        {contact.march.map((element) => {
                          return (
                            <>
                              <Typography className="col-span-8 text-lg font-medium">
                                {element.serviceName}
                              </Typography>
                              <Typography className="self-center text-center">
                                &nbsp;&nbsp;{element.quantity}
                              </Typography>
                              <Typography className="col-span-2  self-center text-center">
                                {element.delivered}
                              </Typography>
                              <Typography
                                className="self-center text-center"
                                style={{ color: "#ff0000" }}
                              >
                                {element.extra}
                              </Typography>

                              <div className="col-span-12 my-16 border-b" />
                            </>
                          );
                        })}
                        {contact.marchService[0] && (
                          <>
                            <div className="col-span-12 mt-14" />

                            <div className="col-span-2" />
                            <div
                              className="col-span-1 font-medium text-md "
                              style={{ color: "#94A3B8" }}
                            >
                              BENEFITS
                            </div>
                            <div className="col-span-3" />
                            <div className="col-span-3" />
                            <div
                              className="col-span-1  font-medium text-md text-center"
                              style={{ color: "#94A3B8" }}
                            >
                              STATUS
                            </div>
                            <div className="col-span-2" />
                            <div className="col-span-2" />
                            <div className="col-span-8 my-8 border-b" />
                            <div className="col-span-2" />
                            {contact.marchService.map((element) => {
                              return (
                                <>
                                  <div className="col-span-12" />
                                  <div className="col-span-2" />

                                  <div className="col-span-1 text-lg font-medium text-left">
                                    {element.serviceName}
                                  </div>

                                  <div className="col-span-3" />
                                  <div className="col-span-3" />

                                  <div
                                    className="col-span-1 self-center text-center"
                                    style={{ color: "#58ed13" }}
                                  >
                                    {element.quantity == 0 ? (
                                      <div
                                        className="self-center text-center"
                                        style={{ color: "#58ed13" }}
                                      >
                                        Active
                                      </div>
                                    ) : (
                                      element.quantity
                                    )}
                                  </div>
                                  <div className="col-span-2" />
                                  <div className="col-span-2" />
                                  <div className="col-span-8 my-8 " />
                                  <div className="col-span-2" />
                                </>
                              );
                            })}
                          </>
                        )}
                      </div>
                    </Box>
                    <div className="col-span-12 mt-64" />
                  </>
                )}
                {contact.february[0] && (
                  <>
                    <Box
                      sx={{
                        borderWidth: 4,
                        borderStyle: "solid",
                        borderColor: "#323333",
                      }}
                      style={{ borderRadius: "10px" }}
                      className="p-20 pb-28 pt-10"
                    >
                      <div className="flex justify-center items-center ">
                        <div className="text-3xl p-6 text-[#f4b231]">
                          FEBRUARY
                        </div>
                      </div>
                      <div className="grid grid-cols-12 gap-x-4 mt-24">
                        <div
                          className="col-span-8 font-medium text-md"
                          style={{ color: "#94A3B8" }}
                        >
                          SERVICE
                        </div>
                        <div
                          className="font-medium text-md text-center"
                          style={{ color: "#94A3B8" }}
                        >
                          CONTRACT
                        </div>
                        <div
                          className=" col-span-2  font-medium text-md text-center"
                          style={{ color: "#94A3B8" }}
                        >
                          DELIVERED
                        </div>
                        <div
                          className="font-medium text-md text-center "
                          style={{ color: "#ff0000" }}
                        >
                          EXTRA
                        </div>

                        <div className="col-span-12 my-16 border-b" />
                        {contact.february.map((element) => {
                          return (
                            <>
                              <Typography className="col-span-8 text-lg font-medium">
                                {element.serviceName}
                              </Typography>
                              <Typography className="self-center text-center">
                                &nbsp;&nbsp;{element.quantity}
                              </Typography>
                              <Typography className="col-span-2  self-center text-center">
                                {element.delivered}
                              </Typography>
                              <Typography
                                className="self-center text-center"
                                style={{ color: "#ff0000" }}
                              >
                                {element.extra}
                              </Typography>

                              <div className="col-span-12 my-16 border-b" />
                            </>
                          );
                        })}
                        {contact.februaryService[0] && (
                          <>
                            <div className="col-span-12 mt-14" />

                            <div className="col-span-2" />
                            <div
                              className="col-span-1 font-medium text-md "
                              style={{ color: "#94A3B8" }}
                            >
                              BENEFITS
                            </div>
                            <div className="col-span-3" />
                            <div className="col-span-3" />
                            <div
                              className="col-span-1  font-medium text-md text-center"
                              style={{ color: "#94A3B8" }}
                            >
                              STATUS
                            </div>
                            <div className="col-span-2" />
                            <div className="col-span-2" />
                            <div className="col-span-8 my-8 border-b" />
                            <div className="col-span-2" />
                            {contact.februaryService.map((element) => {
                              return (
                                <>
                                  <div className="col-span-12" />
                                  <div className="col-span-2" />

                                  <div className="col-span-1 text-lg font-medium text-left">
                                    {element.serviceName}
                                  </div>

                                  <div className="col-span-3" />
                                  <div className="col-span-3" />

                                  <div
                                    className="col-span-1 self-center text-center"
                                    style={{ color: "#58ed13" }}
                                  >
                                    {element.quantity == 0 ? (
                                      <div
                                        className="self-center text-center"
                                        style={{ color: "#58ed13" }}
                                      >
                                        Active
                                      </div>
                                    ) : (
                                      element.quantity
                                    )}
                                  </div>
                                  <div className="col-span-2" />
                                  <div className="col-span-2" />
                                  <div className="col-span-8 my-8 " />
                                  <div className="col-span-2" />
                                </>
                              );
                            })}
                          </>
                        )}
                      </div>
                    </Box>
                    <div className="col-span-12 mt-64" />
                  </>
                )}
                {contact.january[0] && (
                  <>
                    <Box
                      sx={{
                        borderWidth: 4,
                        borderStyle: "solid",
                        borderColor: "#323333",
                      }}
                      style={{ borderRadius: "10px" }}
                      className="p-20 pb-28 pt-10"
                    >
                      <div className="flex justify-center items-center ">
                        <div className="text-3xl p-6 text-[#f4b231]">
                          JANUARY
                        </div>
                      </div>
                      <div className="grid grid-cols-12 gap-x-4 mt-24">
                        <div
                          className="col-span-8 font-medium text-md"
                          style={{ color: "#94A3B8" }}
                        >
                          SERVICE
                        </div>
                        <div
                          className="font-medium text-md text-center"
                          style={{ color: "#94A3B8" }}
                        >
                          CONTRACT
                        </div>
                        <div
                          className=" col-span-2  font-medium text-md text-center"
                          style={{ color: "#94A3B8" }}
                        >
                          DELIVERED
                        </div>
                        <div
                          className="font-medium text-md text-center "
                          style={{ color: "#ff0000" }}
                        >
                          EXTRA
                        </div>

                        <div className="col-span-12 my-16 border-b" />
                        {contact.january.map((element) => {
                          return (
                            <>
                              <Typography className="col-span-8 text-lg font-medium">
                                {element.serviceName}
                              </Typography>
                              <Typography className="self-center text-center">
                                &nbsp;&nbsp;{element.quantity}
                              </Typography>
                              <Typography className="col-span-2  self-center text-center">
                                {element.delivered}
                              </Typography>
                              <Typography
                                className="self-center text-center"
                                style={{ color: "#ff0000" }}
                              >
                                {element.extra}
                              </Typography>

                              <div className="col-span-12 my-16 border-b" />
                            </>
                          );
                        })}
                        {contact.januaryService[0] && (
                          <>
                            <div className="col-span-12 mt-14" />

                            <div className="col-span-2" />
                            <div
                              className="col-span-1 font-medium text-md "
                              style={{ color: "#94A3B8" }}
                            >
                              BENEFITS
                            </div>
                            <div className="col-span-3" />
                            <div className="col-span-3" />
                            <div
                              className="col-span-1  font-medium text-md text-center"
                              style={{ color: "#94A3B8" }}
                            >
                              STATUS
                            </div>
                            <div className="col-span-2" />
                            <div className="col-span-2" />
                            <div className="col-span-8 my-8 border-b" />
                            <div className="col-span-2" />
                            {contact.januaryService.map((element) => {
                              return (
                                <>
                                  <div className="col-span-12" />
                                  <div className="col-span-2" />

                                  <div className="col-span-1 text-lg font-medium text-left">
                                    {element.serviceName}
                                  </div>

                                  <div className="col-span-3" />
                                  <div className="col-span-3" />

                                  <div
                                    className="col-span-1 self-center text-center"
                                    style={{ color: "#58ed13" }}
                                  >
                                    {element.quantity == 0 ? (
                                      <div
                                        className="self-center text-center"
                                        style={{ color: "#58ed13" }}
                                      >
                                        Active
                                      </div>
                                    ) : (
                                      element.quantity
                                    )}
                                  </div>
                                  <div className="col-span-2" />
                                  <div className="col-span-2" />
                                  <div className="col-span-8 my-8 " />
                                  <div className="col-span-2" />
                                </>
                              );
                            })}
                          </>
                        )}
                      </div>
                    </Box>
                    <div className="col-span-12 mt-64" />
                  </>
                )}




                <div className=" ">
                  <div className="flex items-center mt-4">
                    <img
                      className="flex-0 w-48 mt-3"
                      src="assets/images/logo/1-removebg-preview.jpg"
                      alt="logo"
                    />
                    <Typography
                      className="ml-24 text-sm"
                      color="text.secondary"
                    >
                      Thank you for chossing Maven Events, we extend our
                      sincerest gratitude to each of you for choosing us to
                      bring your unique visions to life. Your collaboration and
                      trust are the cornerstone of our success. Please pay within 30 days.
                    </Typography>
                    
                  </div>
                </div>
              </CardContent>
            </Box>
          </Card>
        </motion.div>
      </div>
    </>
  );
}

export default UserTab;

// <div className="flex items-start justify-between">
// <Box
//   sx={{
//     backgroundColor: "#1d1f1f",
//     color: "#ffffff",
//   }}
//   className="grid auto-cols-max grid-flow-col gap-x-32  py-2 px-32 rounded-xl"
// >
//   <div className="place-self-center w-96">
//     {user.logoFile === "" ? (
//       <img
//         className="w-52 items-center"
//         src="/assets/images/logo/sss.png"
//         alt="logo"
//         style={{ borderRadius: "50%" }}
//       />
//     ) : (
//       <img
//         className="w-52 items-center"
//         src={`https://www.api.mavenevents.ae/client/${user.logoFile}`}
//         alt="logo"
//       />
//     )}
//   </div>
//   <Box
//     className="pl-40 border-l text-md"
//     sx={{
//       borderColor: (theme) =>
//         alpha(
//           theme.palette.getContrastText(
//             theme.palette.primary.dark
//           ),
//           0.25
//         ),
//     }}
//   >
//     <div className="text-md">
//       <div className="grid grid-cols-2 gap-x-0.5 gap-y-1">
//         <Typography
//           className="font-medium pt-5"
//           color="text.secondary"
//         >
//           CLIENT
//         </Typography>
//         <Typography className="font-medium pt-2 ">
//           #{user.name}
//         </Typography>
//         <Typography
//           className="font-medium "
//           color="text.secondary"
//         >
//           ADDRESS
//         </Typography>
//         <Typography className="font-medium pt-2">
//           {user.address}
//         </Typography>
//         <Typography
//           className="font-medium "
//           color="text.secondary"
//         >
//           EMAIL
//         </Typography>
//         <Typography className="font-medium underline pt-2">
//           {user.email}
//         </Typography>
//         <Typography
//           className="font-medium "
//           color="text.secondary"
//         >
//           PHONE
//         </Typography>
//         <Typography className="font-medium pt-2 pb-2">
//           +971 {user.phone}
//         </Typography>
//       </div>
//     </div>
//   </Box>
// </Box>

// <div className=" gap-x-16 gap-y-1"></div>
// </div>
