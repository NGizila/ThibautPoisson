import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    imgBackground: {
      width: '100%',
      height: '100%',
      flex: 1,
      position: 'absolute',
    },
    img: {
        width: '40%',
        height: '40%',
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        width: 40,
        height: 40,
    },
    imageDetails: {
        width: 330,
        height: 330,
    },
    container: {
      justifyContent: "center",
      alignItems: "center",
      flex: 1
    },
    header: {
        marginBottom: 20,
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      categoryContainer: {
        marginBottom: 50,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: "center",
      },
  
    table: {
      flex: 1,
      width: 300,
      flexDirecton: 'row',
  
    },
    itemRecettes: {
        backgroundColor: 'rgba(0,0,0, 0.4)',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    },
    textBouton:{
        color: 'white',
        fontsize: 30,
        flex: 1,
        marginHorizontal: 10,
        width: 300,
        flexDirecton: 'row',
      },
      title: {
          flex: 1,
          width: 300,
          flexDirecton: 'row',
      },

    item: {
      margin: 4,
      flex: 1,
      backgroundColor: 'rgba(136, 128, 128, 0.5)',
      flexDirection: "column"
  
    },
    column: {
      flex: 1,
      flexDirection: "column"
    },
    row: {
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
    },
    button_home: {
        backgroundColor: 'rgba(52, 52, 52, 0.2)',
        justifyContent: screenLeft
    },

    text: {
        alignItems: "center",
        justifyContent: "center",
    }
  
  })