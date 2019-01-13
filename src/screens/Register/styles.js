import {Platform, StyleSheet} from 'react-native';
import colors from '../../assets/colors';

export default styles =StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  toolbar:{
    paddingTop:10,
    paddingBottom:10,
    flexDirection:'row'    
  },
  toolbarButton:{
    width: 50,            
    alignItems: 'center',
    
  },
  toolbarTitle:{
    color: colors.white,
    textAlign:'center',
    justifyContent: 'center',
    fontWeight:'bold',
    alignItems: 'center',
    flex:1,
    fontFamily: 'Montserrat-Bold',   
    color: colors.white,   
    fontSize: 18,       
  },
  
  viewWrapper:{
    flex:1, 
    // alignItems: 'center', 
    // justifyContent: 'center',
  },

  text: {
    color: colors.gold,
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
    fontWeight: '200',
    marginLeft: 8,
  },
  
});