import {
  Image,
  ImageBackground,
  Linking,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import AppleIcon from "../components/icons/AppleIcon";
import GoogleIcon from "../components/icons/GoogleIcon";
import LeafIcon from "../components/icons/LeafIcon";
import { colors } from "../services/styling/styles";

import EscendiaButton from "@components/default/EscendiaButton";
import EscendiaSocialMedia from "@components/default/EscendiaSocialMedia";
import EscendiaDefaultPage from "@components/main/EscendiaDefaultPage";
import { calculate, isWeb } from "@services/functions";
import { useTranslation } from "react-i18next";

import EscendiaText from "@components/default/EscendiaText";
import { Ionicons } from "@expo/vector-icons";
import { useUserStore } from "@services/store/store";
import { useEffect, useState } from "react";
import { useToast } from "react-native-toast-notifications";
import { t } from "i18next";
import EscendiaCarousel from "@components/default/EscendiaCarousel";
import EscendiaModal from "@components/default/EscendiaModal";

function LandingPage() {
  function HeaderText(props: any) {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ flex: 7 }}></View>
        <View style={{ flex: 5 }}>
          <EscendiaText
            style={{
              fontSize: 24,
              fontWeight: "100",
              lineHeight: 34,
            }}
          >
            {t("Page_Landing_MainText")}
          </EscendiaText>
          <View
            style={{
              flexDirection: "row",
              paddingTop: 10,
              alignItems: "center",
            }}
          >
            <EscendiaButton
              style={{ margin: 10, backgroundColor: colors.escendia_dark }}
              onPress={() => {
                Linking.openURL("https://play.google.com/store/apps");
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Ionicons
                  size={50}
                  color={colors.escendia_light}
                  name="logo-google-playstore"
                />
                <View style={{ paddingLeft: 20 }}>
                  <EscendiaText
                    color={colors.escendia_light}
                    style={{
                      fontWeight: "300",
                    }}
                  >
                    {t("Page_Landing_Available")}
                  </EscendiaText>
                  <EscendiaText
                    color={colors.escendia_light}
                    style={{
                      fontWeight: "bold",
                      fontSize: 24,
                    }}
                  >
                    {t("Page_Landing_AndroidStore")}
                  </EscendiaText>
                </View>
              </View>
            </EscendiaButton>
            <EscendiaButton
              style={{ margin: 10, backgroundColor: colors.escendia_dark }}
              onPress={() => {
                Linking.openURL("https://www.apple.com/de/app-store/");
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Ionicons
                  size={50}
                  color={colors.escendia_light}
                  name="logo-apple-appstore"
                />
                <View style={{ paddingLeft: 20 }}>
                  <EscendiaText
                    color={colors.escendia_light}
                    style={{
                      fontWeight: "300",
                    }}
                  >
                    {t("Page_Landing_Available")}
                  </EscendiaText>
                  <EscendiaText
                    color={colors.escendia_light}
                    style={{
                      fontWeight: "bold",
                      fontSize: 24,
                    }}
                  >
                    {t("Page_Landing_IOSStore")}
                  </EscendiaText>
                </View>
              </View>
            </EscendiaButton>
          </View>
        </View>
        <View style={{ paddingRight: 50 }}>
          <EscendiaSocialMedia size={30} color={colors.escendia_dark} />
        </View>
      </View>
    );
  }

  function HeaderTextMobile(props: any) {
    return (
      <View
        style={{
          alignItems: "center",
          flex: 1,
          alignSelf: "flex-end",
          paddingRight: 55,
        }}
      >
        <EscendiaButton
          style={{ margin: 10, backgroundColor: colors.escendia_dark }}
          onPress={() => {
            Linking.openURL("https://play.google.com/store/apps");
          }}
          iconLeft={
            <AppleIcon height={30} width={30} fill={colors.escendia_light} />
          }
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={{ paddingLeft: 10 }}>
              <EscendiaText
                color={colors.escendia_light}
                style={{
                  fontSize: 10,
                  fontWeight: "300",
                }}
              >
                {t("Page_Landing_Available")}
              </EscendiaText>
              <EscendiaText
                color={colors.escendia_light}
                style={{
                  fontWeight: "bold",
                  fontSize: 12,
                }}
              >
                {t("Page_Landing_IOSStore")}
              </EscendiaText>
            </View>
          </View>
        </EscendiaButton>
        <EscendiaButton
          style={{ backgroundColor: colors.escendia_dark }}
          onPress={() => {
            Linking.openURL("https://play.google.com/store/apps");
          }}
          iconLeft={
            <GoogleIcon height={30} width={30} fill={colors.escendia_light} />
          }
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={{ paddingLeft: 10 }}>
              <EscendiaText
                color={colors.escendia_light}
                style={{
                  fontSize: 10,
                  fontWeight: "300",
                }}
              >
                {t("Page_Landing_Available")}
              </EscendiaText>
              <EscendiaText
                color={colors.escendia_light}
                style={{
                  fontWeight: "bold",
                  fontSize: 12,
                }}
              >
                {t("Page_Landing_AndroidStore")}
              </EscendiaText>
            </View>
          </View>
        </EscendiaButton>
      </View>
    );
  }

  function FeatureLine(props: any) {
    return (
      <View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View style={{ flex: 1 }}></View>
          <View style={{ flex: 1, flexDirection: "column" }}>
            <EscendiaText
              fontFamily={"Simply Conception"}
              color={colors.escendia_light}
              style={{
                fontSize: 100,
                fontWeight: "600",
                lineHeight: 100,
              }}
            >
              {t("Page_Landing_Feature_Title")}
            </EscendiaText>
            <EscendiaText
              color={colors.escendia_light}
              style={{
                fontSize: 24,
                fontWeight: "300",
                lineHeight: 24,
              }}
            >
              {t("Page_Landing_Feature_Text")}
            </EscendiaText>
          </View>
          <View style={{ flex: 1, alignItems: "center" }}>
            {/*             <EscendiaText color={colors.escendia_light}>
              {t("Page_Landing_Feature_CommingSoon")}
            </EscendiaText> */}
            <EscendiaCarousel
              itemWidth={300}
              data={[
                {
                  name: t("Page_Landing_Carousel_Beverages_Title"),
                  modalTitle: t("Page_Landing_Carousel_Beverages_Modal_Title"),
                  modalBody: t("Page_Landing_Carousel_Beverages_Modal_Body"),
                  image: require("../assets/beverages.jpg"),
                },
                {
                  name: t("Page_Landing_Carousel_Producer_Title"),
                  modalTitle: t("Page_Landing_Carousel_Producer_Modal_Title"),
                  modalBody: t("Page_Landing_Carousel_Producer_Modal_Body"),
                  image: require("../assets/producer.jpg"),
                },
                {
                  name: t("Page_Landing_Carousel_Events_Title"),
                  modalTitle: t("Page_Landing_Carousel_Events_Modal_Title"),
                  modalBody: t("Page_Landing_Carousel_Events_Modal_Body"),
                  image: require("../assets/event.jpg"),
                },
                {
                  name: t("Page_Landing_Carousel_TasteList_Title"),
                  modalTitle: t("Page_Landing_Carousel_TasteList_Modal_Title"),
                  modalBody: t("Page_Landing_Carousel_TasteList_Modal_Body"),
                  image: require("../assets/tastinglist.jpg"),
                },
                {
                  name: t("Page_Landing_Scan_Title"),
                  image: require("../assets/questionmark.jpg"),
                },
              ]}
            />
          </View>
        </View>
      </View>
    );
  }

  function FeatureLineMobile(props: any) {
    return (
      <View>
        <View
          style={{
            ...StyleSheet.absoluteFillObject,
            position: "absolute",
            left: -100,
          }}
        >
          <LeafIcon
            height={indexLeafTop}
            fill={colors.escendia_img_background_dark}
            style={{ transform: [{ rotate: "270deg" }] }}
          />
        </View>
        <EscendiaText
          style={{
            fontWeight: "100",
            lineHeight: 34,
            color: colors.escendia_light,
            textAlign: "center",
          }}
        >
          {t("Page_Landing_MainText")}
        </EscendiaText>

        <EscendiaText
          fontFamily={"Simply Conception"}
          color={colors.escendia_light}
          style={{
            fontSize: 50,
            fontWeight: "600",
            lineHeight: 100,
            textAlign: "center",
          }}
        >
          {t("Page_Landing_Feature_Title")}
        </EscendiaText>

        <EscendiaText
          color={colors.escendia_light}
          style={{
            fontWeight: "300",
            lineHeight: 24,
            textAlign: "center",
            margin: 10,
          }}
        >
          {t("Page_Landing_Feature_Text")}
        </EscendiaText>
        <View style={{ flex: 1 }}>
          <EscendiaCarousel
            itemWidth={300}
            data={[
              {
                name: t("Page_Landing_Carousel_Beverages_Title"),
                modalTitle: t("Page_Landing_Carousel_Beverages_Modal_Title"),
                modalBody: t("Page_Landing_Carousel_Beverages_Modal_Body"),
                image: require("../assets/beverages.jpg"),
              },
              {
                name: t("Page_Landing_Carousel_Producer_Title"),
                modalTitle: t("Page_Landing_Carousel_Producer_Modal_Title"),
                modalBody: t("Page_Landing_Carousel_Producer_Modal_Body"),
                image: require("../assets/producer.jpg"),
              },
              {
                name: t("Page_Landing_Carousel_Events_Title"),
                modalTitle: t("Page_Landing_Carousel_Events_Modal_Title"),
                modalBody: t("Page_Landing_Carousel_Events_Modal_Body"),
                image: require("../assets/event.jpg"),
              },
              {
                name: t("Page_Landing_Carousel_TasteList_Title"),
                modalTitle: t("Page_Landing_Carousel_TasteList_Modal_Title"),
                modalBody: t("Page_Landing_Carousel_TasteList_Modal_Body"),
                image: require("../assets/tastinglist.jpg"),
              },
              {
                name: t("Page_Landing_Scan_Title"),
                image: require("../assets/questionmark.jpg"),
              },
            ]}
          />
        </View>
      </View>
    );
  }

  const indexLeafTop = calculate("height", 750, 0);

  const bottle1Top = calculate("height", 350, 105);
  const bottle1Left = calculate("width", 400, 0);
  const bottleWidth = calculate("width", 300, 200);
  const bottleHeight = calculate("height", 600, 200);

  const bottle2Top = calculate("height", 270, 120);
  const bottle2Left = calculate("width", 600, 60);

  const toast = useToast();
  const user = useUserStore((state) => state.user);

  useEffect(() => {
    if (user) {
      toast.show("Toast_Success_Login");
    }
  }, [user]);

  return (
    <EscendiaDefaultPage
      title={"Name"}
      pyramideStyle={"left"}
      childrenHeaderBelowPyramide={
        <View style={{ position: "absolute" }}>
          <View
            style={{
              ...StyleSheet.absoluteFillObject,
              top: bottle1Top,
              left: bottle1Left,
            }}
          >
            <Image
              style={{
                resizeMode: "contain",
                height: bottleHeight,
                width: bottleWidth,
              }}
              source={require("../assets/winebottle_1.png")}
            />
          </View>
          <View
            style={{
              ...StyleSheet.absoluteFillObject,
              top: bottle2Top,
              left: bottle2Left,
            }}
          >
            <Image
              style={{
                resizeMode: "contain",
                height: bottleHeight,
                width: bottleWidth,
              }}
              source={require("../assets/winebottle_1.png")}
            />
          </View>
        </View>
      }
      childrenHeader={isWeb() ? <HeaderText /> : <HeaderTextMobile />}
    >
      {isWeb() ? <FeatureLine /> : <FeatureLineMobile />}
    </EscendiaDefaultPage>
  );
}

export default LandingPage;
