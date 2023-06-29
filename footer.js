import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';


const Footer = () => {
  return (
    <View style={styles.footer}>
      <View style={styles.sb_footer}>
      <View style={styles.iconContainer}>
        <View>
          <Icon name="phone" style={styles.icon} />
          <Text style={styles.support}>        24/7 CUSTOMER CARE</Text>
        </View>
        <View>
          <Icon name="ticket" style={styles.icon} />
          <Text style={styles.support}>RESEND BOOKING CONFIRMATION</Text>
        </View>
        <View>
          <Icon name="envelope" style={styles.icon} />
          <Text style={styles.support}>    SUSCRIBE TO THE NEWSLETTER</Text>
        </View>
       </View>
        <View style={styles.sb_footer_links}>
          <View style={styles.sb_footer_links_div}>
            <Text style={styles.heading}>MOVIES NOW SHOWING IN MUMBAI</Text>
            <Text style={styles.separator}>|</Text>
            <Text style={styles.link}>Satyaprem Ki Katha</Text>
            <Text style={styles.separator}>|</Text>
            <Text style={styles.link}>Indina Jones and the Dial of Destiny</Text>
            <Text style={styles.separator}>|</Text>
            <Text style={styles.link}>Baipan Bhari Deva</Text>
            <Text style={styles.separator}>|</Text>
            <Text style={styles.link}>Zara Hatke Zara Bachke</Text>
            <Text style={styles.separator}>|</Text>
            <Text style={styles.link}>Spy</Text>
            <Text style={styles.separator}>|</Text>
            <Text style={styles.link}>Adipurush</Text>
            <Text style={styles.separator}>|</Text>
            <Text style={styles.link}>1920:Horros of the Heart</Text>
          </View>
          <View style={styles.sb_footer_links_div}>
            <Text style={styles.heading}>Resources</Text>
            <Text style={styles.link}>Resource Center</Text>
            <Text style={styles.link}>Testimonials</Text>
            <Text style={styles.link}>STV</Text>
          </View>
          <View style={styles.sb_footer_links_div}>
            <Text style={styles.heading}>Partners</Text>
            <Text style={styles.link}>Swing Tech</Text>
          </View>
          <View style={styles.sb_footer_links_div}>
            <Text style={styles.heading}>Company</Text>
            <Text style={styles.link}>About</Text>
            <Text style={styles.link}>Press</Text>
            <Text style={styles.link}>Career</Text>
            <Text style={styles.link}>Contact</Text>
          </View>
          </View>
        </View>

        <View style={styles.separator} />

        <View style={styles.sb_footer_below}>
          <View style={styles.sb_footer_below_links}>
            <Text style={styles.belowLink}>Terms & Conditions</Text>
            <Text style={styles.belowLink}>Privacy</Text>
            <Text style={styles.belowLink}>Security</Text>
            <Text style={styles.belowLink}>Cookie Declaration</Text>
          </View>  
          <Text style={styles.footerText}>
            @{new Date().getFullYear()} CodeInn. All rights reserved.
          </Text>
        </View>
        
        <View style={styles.logoline}>
            {/* <Icon name='grip-lines' style={styles.tixi}></Icon> */}
            <Image source = {require('../assets/tixito.png')} style={styles.logo} />
            {/* <Icon name='grip-lines' style={styles.tixi}></Icon> */}
      </View>
            <View style={styles.socialmedia}>
            <Icon name="facebook" style={styles.socialMediaIcon} />
            <Icon name="twitter" style={styles.socialMediaIcon} />
            <Icon name="instagram" style={styles.socialMediaIcon} />
            <Icon name="youtube" style={styles.socialMediaIcon} />
            <Icon name="pinterest" style={styles.socialMediaIcon} />
            <Icon name="linkedin" style={styles.socialMediaIcon} />
            </View>
    </View>

  );
};


const styles = StyleSheet.create({
    footer: {
      marginTop:120,
      backgroundColor:'#333338',
      width:'100%'
    },
    sb_footer: {
      padding: 16,
    },
    support:{
        marginLeft:220,
        fontSize:14,
        paddingleft:20,
        marginBottom:10
    },
    iconContainer: {
        flexDirection: "row",
        marginBottom: 16,
        backgroundColor:'rgb(153, 153, 153)',
      },
      icon: {
        fontSize: 75,
        marginLeft:290,
        marginRight: 100,
        marginTop:20,
        marginBottom:20,
        color: "white",
      },
    sb_footer_links: {
      flexDirection: "row",
      justifyContent: "space-between",
      flexWrap: "wrap",
      width: "100%",
      textAlign: "left",
      marginBottom: 16,
    },
    sb_footer_links_div: {
      width: "25%",
      marginHorizontal: 16,
      display: "flex",
      justifyContent: "flex-start",
      flexDirection: "row",
      color: "white",
    },
    heading: {
    //   marginHorizontal:290,
      fontSize: 14,
      lineHeight: 17,
      marginBottom: 9,
      color: "white",
    },
    link: {
      fontSize: 12,
      lineHeight: 15,
      marginHorizontal: 4,
      color: "white",
    },
    socialmedia: {
        marginTop:50,
        marginBottom:50,
        marginHorizontal:650,
      flexDirection: "row",
    },
    socialMediaIcon: {
        fontSize:'105%',
        marginHorizontal:12,
    },
    separator: {
      borderBottomColor: "white",
      borderBottomWidth: 1,
      fontSize: 16,
      color: 'gray',
      marginHorizontal: 5,
    },
    sb_footer_below: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 2,
    },
    sb_footer_below_links: {
      flexDirection: "row",
    },
    belowLink: {
      fontSize: 13,
      lineHeight: 15,
      marginLeft: 16,
      color: "white",
      fontWeight: "600",
    },
    footerText: {
      fontSize: 13,
      lineHeight: 15,
      color: "white",
      fontWeight: "600",
    },
    logoline: {
        marginTop: 50,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      },
    //   tixi: {
    //     // height: 50,
    //     width:'100%',
    //     fontSize:100,
    //     // fontSize: 55,

    //     color: "white",
    //   },
      logo: {
        width: "20%", // Adjust the width and height based on your logo's dimensions
        height: 120,
        marginTop: 5,
        // marginRight: 10, // Optional margin right for spacing
      },
  });

export default Footer;