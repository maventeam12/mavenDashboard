import { orange } from "@mui/material/colors";
import { lighten, styled } from "@mui/material/styles";
import { Controller, useFormContext } from "react-hook-form";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import Box from "@mui/material/Box";
import { IconButton } from "@mui/material";
import {  useState } from "react";

const Root = styled("div")(({ theme }) => ({
  "& .productImageFeaturedStar": {
    position: "absolute",
    top: 0,
    right: 0,
    color: orange[400],
    opacity: 0,
  },

  "& .productImageUpload": {
    transitionProperty: "box-shadow",
    transitionDuration: theme.transitions.duration.short,
    transitionTimingFunction: theme.transitions.easing.easeInOut,
  },

  "& .productImageItem": {
    transitionProperty: "box-shadow",
    transitionDuration: theme.transitions.duration.short,
    transitionTimingFunction: theme.transitions.easing.easeInOut,
    "&:hover": {
      "& .productImageFeaturedStar": {
        opacity: 0.8,
      },
    },
    "&.featured": {
      pointerEvents: "none",
      boxShadow: theme.shadows[3],
      "& .productImageFeaturedStar": {
        opacity: 1,
      },
      "&:hover .productImageFeaturedStar": {
        opacity: 1,
      },
    },
  },
}));
function BlogImagesTab(props) {
  const methods = useFormContext();
  const { control, watch } = methods;
  const [preview, setPreview] = useState();
  const onSelectFile = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Read the file and set preview
    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);

    // Update form value
    methods.setValue('cvFile', file);
  };
  return (
    <Root>
      <div className="flex justify-center sm:justify-start flex-wrap -mx-16 ml-5 mt-10">
        <Controller
          name="cvFile"
          control={control}
          render={({ field }) => (
            <>
              {field.value !== "" ? (
                <div>
                  {typeof field.value == "string" &&
                  field.value.includes("uploads") ? (
                   <a href={`https://www.api.mavenevents.ae/userCareer/${field.value}`} target="_blank">
                   <Box
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === "light"
                        ? lighten(theme.palette.background.default, 0.4)
                        : lighten(theme.palette.background.default, 0.02),
                  }}
                  component="label"
                  style={{color:'#f4b231'}}
                  htmlFor="cvFile"
                  className="productImageUpload flex items-center justify-center relative w-128 h-128 rounded-16 mx-12 mb-24 overflow-hidden cursor-pointer shadow hover:shadow-lg"
                >  <div className="absolute inset-0 flex items-center justify-center z-20">
                <div>
                  <IconButton
                    onClick={() => {
                      field.onChange("");
                    }}
                  >
                    <FuseSvgIcon className="text-white">
                      heroicons-outline:trash
                    </FuseSvgIcon>
                  </IconButton>
                </div>
              </div>
                  <div style={{color:'#f4b231',padding:'40px',fontSize:'30px'}}>

                  CV
                  </div>
                  </Box>
                   </a>

                  ) : (
                    <Box
                      sx={{
                        borderWidth: 4,
                        borderStyle: "solid",
                        borderColor: "#f4b231",
                      }}
                      className="productImageItem flex items-center justify-center relative  rounded-16 mx-12 mb-24 overflow-hidden cursor-pointer outline-none shadow hover:shadow-lg"
                    >
                      <div className="absolute inset-0 bg-black bg-opacity-10 z-10" />
                      <div className="absolute inset-0 flex items-center justify-center z-20">
                        <div>
                          <label
                            htmlFor="cvFile"
                            className="flex p-8 cursor-pointer"
                          >
                            <input
                              accept="application/pdf"
                              className="hidden"
                              id="cvFile"
                              type="file"
                              onChange={async (e) => {
                                field.onChange(e);
                                onSelectFile(e);
                              }}
                            />
                            <FuseSvgIcon className="text-white">
                            heroicons-outline:upload
                            </FuseSvgIcon>
                          </label>
                        </div>
                        <div>
                          <IconButton
                            onClick={() => {
                              field.onChange("");
                            }}
                          >
                            <FuseSvgIcon className="text-white">
                              heroicons-outline:trash
                            </FuseSvgIcon>
                          </IconButton>
                        </div>
                      </div>

                      <div style={{color:'#f4b231',padding:'40px',fontSize:'30px'}}>

               Uploaded
                  </div>
                    </Box>
                  )}
                </div>
              ) : (
                <Box
                  sx={{
                    borderWidth: 4,
                        borderStyle: "solid",
                        borderColor: "#f4b231",
                  }}
                  component="label"
                  htmlFor="cvFile"
                  className="productImageUpload flex items-center justify-center relative w-128 h-128 rounded-16 mx-12 mb-24 overflow-hidden cursor-pointer shadow hover:shadow-lg"
                >
                  <input
                    accept="application/pdf"
                    className="hidden"
                    id="cvFile"
                    type="file"
                    onChange={async (e) => {
                      field.onChange(e);
                      onSelectFile(e);
                    }}
                  />
                  <FuseSvgIcon size={32} color="action"style={{color:'#f4b231'}}>
                    heroicons-outline:upload
                  </FuseSvgIcon>
                </Box>
              )}
            </>
          )}
        />
      </div>
    </Root>
  );
}

export default BlogImagesTab;
