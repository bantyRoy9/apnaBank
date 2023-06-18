export const singleSelectorStyle = {
    control: (styles,state) => ({
      display: 'inline-flex',
      border: '2px solid var(--color-primary)',
    //   backgroundColor:state.isDisabled ? '#3d3d3d ':'var(--drop-down-bg-col) ',
      borderColor: state.isFocused ? 'var(--color-primary)' : 'var(--color-primary)',
      borderRadius:'0.25rem',
      zIndex:2,
      cursor: state.isDisabled ? 'not-allowed' : 'default',
      width: '100% !important',
      height: '35px !important',
      "&:hover": {
        outline: 'none',
      },
      "& input": {
        color: 'var(--color-icon) !important'
      },
      "& svg": {
        color: 'var(--color-icon) !important',
        transition: 'all .3s',
        cursor: 'pointer'
      },
      "& svg:focus": {
        color: 'blue !important',
      },
      "& span": {
        color: 'green !important'
      }
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => ({
      ...styles,
      backgroundColor: '#fff',
      color: isSelected ? '#3d3d3d' : '#949596',
      zIndex:'2 !important',
      cursor: isDisabled ? 'not-allowed' : 'default',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      borderBottom:'1px solid #e0d6ce73 !important',
      // height:'35px !important',
      // marginLeft:'10px',
      "&:hover": {
        color: "#3d3d3d",
        cursor: 'pointer',
        // backgroundColor: 'var(--body-background-color)',
      }
    }),
    dropdownIndicator: styles => ({
      ...styles,
      color: "red !important",
      "&:hover": {
          color: "#949596",
          cursor: 'pointer',
        }
    }),
    singleValue: styles => ({
      ...styles,
      color: 'var(--color-icon)',
      fontWeight:600,
      padding:'0px 20px 0 0'
    }),
    menu: styles => ({
      zIndex: 2,
      position: 'absolute',
      width: '100%',
      padding: '0px',
      backgroundColor:'var(--drop-down-bg-col) !important'
    }),
  };