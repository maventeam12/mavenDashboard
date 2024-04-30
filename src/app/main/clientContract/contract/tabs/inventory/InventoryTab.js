import Button from "@mui/material/Button";
import NavLinkAdapter from "@fuse/core/NavLinkAdapter";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import FuseLoading from "@fuse/core/FuseLoading";
import _ from "@lodash";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import Box from "@mui/system/Box";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
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
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const { contractId } = routeParams;

  const { control, watch, reset, handleSubmit, formState, getValues } = useForm(
    {
      mode: "onChange",
      resolver: yupResolver(schema),
    }
  );

  const { isValid, dirtyFields, errors } = formState;

  const form = watch();
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
    }
  }, [dispatch, routeParams, user]);

  useEffect(() => {
    reset({ ...contact });
  }, [contact, reset]);

  /**
   * Form Submit
   */

  if (_.isEmpty(form) || !contact) {
    return <FuseLoading />;
  }
  return (
    <>
      <div className="inline-block p-24 sm:p-40 text-left print:p-0 w-full overflow-auto">
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ bounceDamping: 0 }}
        >
          <Card className="w-xl p-64 mx-auto rounded-2xl shadow print:w-auto print:rounded-none print:shadow-none print:bg-transparent">
            <CardContent className="">
              <div className="flex items-start justify-between">
                <div className="grid grid-cols-2 gap-x-16 gap-y-1">
                  <Typography
                    className="text-4xl tracking-tight"
                    color="text.secondary"
                  >
                    CONTRACT
                  </Typography>
                  <Typography className="text-4xl">#{contact.id}</Typography>
                  <Typography
                    className="font-medium tracking-tight"
                    color="text.secondary"
                  >
                    CONTRACT DATE
                  </Typography>
                  <Typography className="font-medium">
                    {contact.startDate}
                  </Typography>
                  <Typography
                    className="font-medium tracking-tight"
                    color="text.secondary"
                  >
                    DUE DATE
                  </Typography>
                  <Typography className="font-medium">
                    {contact.endDate}
                  </Typography>
                  <Typography
                    className="font-medium tracking-tight"
                    color="text.secondary"
                  >
                    LINK
                  </Typography>
                  <Typography className="font-medium underline">
                    <a
                      href={contact.linkToDrive}
                      target="_blank"
                      className="underline"
                      style={{ background: "#181818" }}
                    >
                      Click here!
                    </a>
                  </Typography>
                </div>

                <Box
                  sx={{
                    backgroundColor: '#1d1f1f',
                    color:  '#ffffff',
                  }}
                  className="grid auto-cols-max grid-flow-col gap-x-32 -mr-64 py-2 px-32 rounded-xl"
                >
                  <div className="place-self-center w-96">
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
                    >
                      Maven Events.
                    </Typography>
                    <Typography className="font-medium py-1" >
                      Ideedah Street 31,
                    </Typography>
                    <Typography className="font-medium py-1" >
                      Abu Dhabi, UAE.
                    </Typography>
                    <Typography className="font-medium py-1">
                      +971 52 486 7771
                    </Typography>
                    <Typography
                      
                      className="underline font-medium py-1 pb-2"
                    >
                      info@mavenevents.ae
                    </Typography>
                  </Box>
                </Box>
              </div>

{
  contact.details.map((detail)=>{
    return(
      <div className=" flex items-center justify-center"style={{color:'#94A3B8'}}>
        month {detail.month}
      </div>
    )
  })
}
              <div className="grid grid-cols-12 gap-x-4 mt-48">
                <div
                  className="col-span-8 font-medium text-md"
                  color="text.secondary"
                >
                  SERVICE
                </div>
                <div
                  className="font-medium text-md text-right"
                  color="text.secondary"
                >
                  RATE
                </div>
                <div
                  className="font-medium text-md text-right"
                  color="text.secondary"
                >
                  QTY
                </div>
                <div
                  className="col-span-2 font-medium text-md text-right"
                  color="text.secondary"
                >
                  TOTAL
                </div>

                <div className="col-span-12 my-16 border-b" />

                <Typography className="col-span-8 text-lg font-medium">
                  Prototype & Design
                </Typography>
                <Typography className="self-center text-right">
                  $75.00
                </Typography>
                <Typography className="self-center text-right">240</Typography>
                <Typography className="col-span-2 self-center text-right">
                  $18,000.00
                </Typography>

                <div className="col-span-12 my-16 border-b" />

                <Typography className="col-span-8 text-lg font-medium">
                  Development
                </Typography>
                <Typography className="self-center text-right">
                  $60.50
                </Typography>
                <Typography className="self-center text-right">350</Typography>
                <Typography className="col-span-2 self-center text-right">
                  $21,175.00
                </Typography>

                <div className="col-span-12 my-16 border-b" />

                <Typography className="col-span-8 text-lg font-medium">
                  Testing
                </Typography>
                <Typography className="self-center text-right">
                  $25.00
                </Typography>
                <Typography className="self-center text-right">50</Typography>
                <Typography className="col-span-2 self-center text-right">
                  $1,250.00
                </Typography>

                <div className="col-span-12 my-16 border-b" />

                <Typography className="col-span-8 text-lg font-medium">
                  Documentation & Training
                </Typography>
                <Typography className="self-center text-right">
                  $26.50
                </Typography>
                <Typography className="self-center text-right">260</Typography>
                <Typography className="col-span-2 self-center text-right">
                  $6,890.00
                </Typography>

                <div className="col-span-12 my-16 border-b" />

                <div className="col-span-8 text-lg font-medium">
                  Critical bug fixes for a year
                </div>
                <div className="self-center text-right">$25,000</div>
                <div className="self-center text-right">2</div>
                <div className="col-span-2 self-center text-right">
                  $50,000.00
                </div>

                <div className="col-span-12 my-16 border-b" />

                <Typography className="col-span-8 text-lg font-medium">
                  Extended security updates for a year
                </Typography>
                <Typography className="self-center text-right">
                  $15.000
                </Typography>
                <Typography className="self-center text-right">2</Typography>
                <Typography className="col-span-2 self-center text-right">
                  $30,000.00
                </Typography>

                <div className="col-span-12 my-16 border-b" />

                <Typography className="col-span-8 text-lg font-medium">
                  Extended updates for a year
                </Typography>
                <Typography className="self-center text-right">
                  $50.000
                </Typography>
                <Typography className="self-center text-right">2</Typography>
                <Typography className="col-span-2 self-center text-right">
                  $100,000.00
                </Typography>

                <div className="col-span-12 mt-64" />

                <Typography
                  className="col-span-10 self-center font-medium tracking-tight"
                  color="text.secondary"
                >
                  SUBTOTAL
                </Typography>
                <Typography className="col-span-2 text-right text-lg">
                  $227,315.00
                </Typography>

                <div className="col-span-12 my-12 border-b" />

                <Typography
                  className="col-span-10 self-center font-medium tracking-tight"
                  color="text.secondary"
                >
                  TAX
                </Typography>
                <Typography className="col-span-2 text-right text-lg">
                  $11,365.75
                </Typography>

                <div className="col-span-12 my-12 border-b" />

                <Typography
                  className="col-span-10 self-center font-medium tracking-tight"
                  color="text.secondary"
                >
                  DISCOUNT
                </Typography>
                <Typography className="col-span-2 text-right text-lg">
                  $3,680.75
                </Typography>

                <div className="col-span-12 my-12 border-b" />

                <Typography
                  className="col-span-10 self-center text-2xl font-medium tracking-tight"
                  color="text.secondary"
                >
                  TOTAL
                </Typography>
                <div className="col-span-2 text-right text-2xl font-medium">
                  $235,000.00
                </div>
              </div>

              <div className="mt-64">
                <Typography className="font-medium">
                  Please pay within 15 days. Thank you for your business.
                </Typography>
                <div className="flex items-start mt-16">
                  <img
                    className="flex-0 w-40 mt-8"
                    src="assets/images/logo/logo.svg"
                    alt="logo"
                  />
                  <Typography className="ml-24 text-sm" color="text.secondary">
                    In condimentum malesuada efficitur. Mauris volutpat placerat
                    auctor. Ut ac congue dolor. Quisque scelerisque lacus sed
                    feugiat fermentum. Cras aliquet facilisis pellentesque. Nunc
                    hendrerit quam at leo commodo, a suscipit tellus dapibus.
                    Etiam at felis volutpat est mollis lacinia. Mauris placerat
                    sem sit amet velit mollis, in porttitor ex finibus. Proin eu
                    nibh id libero tincidunt lacinia et eget.
                  </Typography>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
      <Box className="grid auto-cols-max grid-flow-col gap-x-32 -mr-64 py-2 px-2 rounded-l-2xl">
                <div className="place-self-center w-96">
                  <img
                    className="w-96"
                    src={`https://www.api.mavenevents.ae/client/${user.logoFile}`}
                    alt="logo"
                  />
                </div>
                <div className="text-md">
                  <div className="grid grid-cols-2 gap-x-0.5 gap-y-1">
                  <Typography
                    className="font-medium "
                    color="text.secondary"
                  >
                    CLIENT
                  </Typography>
                  <Typography className="font-medium">#{user.name}</Typography>
                  <Typography
                    className="font-medium "
                    color="text.secondary"
                  >
                    ADDRESS
                  </Typography>
                  <Typography className="font-medium">
                  {user.address}
                  </Typography>
                  <Typography
                    className="font-medium "
                    color="text.secondary"
                  >
                    EMAIL
                  </Typography>
                  <Typography className="font-medium underline">
                    {user.email}
                  </Typography>
                  <Typography
                    className="font-medium "
                    color="text.secondary"
                  >
                    PHONE
                  </Typography>
                  <Typography className="font-medium ">
                  +971 {user.phone}
                  </Typography>
                </div>
                </div>
              </Box>
    </>
  );
}

export default UserTab;
