

// Load Wi-Fi library
#include <ESP8266WiFi.h>
#include <LiquidCrystal_I2C.h>
#include <Servo.h>
#include <FirebaseArduino.h>

Servo servo;

LiquidCrystal_I2C lcd(0x27,16,2);

// Replace with your network credentials
const char* ssid     = "tsukuyomi";
const char* password = "123456789";


#define FIREBASE_HOST "parking-8b845-default-rtdb.firebaseio.com"
#define FIREBASE_AUTH "1sdKw8nqNBJFx7PEjyR9ac01JZ15LaKRdGYQ20TN"


int value1,value2,value3;


WiFiServer server(80);


String output5State = "off";
String output4State = "off";

const int output5 = 5;
const int output4 = 4;


unsigned long currentTime = millis();

unsigned long previousTime = 0; 

const long timeoutTime = 2000;

void setup() {
  Serial.begin(115200);
  lcd.init();
  lcd.backlight();
  delay(1000);
  servo.attach(2);
  delay(1000);
  servo.write(0);
  pinMode(D5,INPUT);
  pinMode(D6,INPUT);
  pinMode(D7,INPUT);
  lcd.setCursor(1,0);
  lcd.print("IOT based Smart  ");
  lcd.setCursor(1,1);
  lcd.print("Parking  ");
  delay(5000);
 
  // Connect to Wi-Fi network with SSID and password
  Serial.print("Connecting to ");
  Serial.println(ssid);
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  // Print local IP address and start web server
  Serial.println("");
  Serial.println("WiFi connected.");
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());
 
  Serial.println();
  Serial.print("connected: ");
  Serial.println(WiFi.localIP());
  
  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
 
}




void loop(){
 
  value1=digitalRead(D5);
  value2=digitalRead(D6);
  value3=digitalRead(D7);
  Serial.println(value1);
  if(Firebase.getString("open/message")=="open"){
    
    //Firebase.setString("open/message","close");
    servo.write(90);
    delay(3000);
    servo.write(0);
    delay(1000);
  }
  Serial.println("here");
  if(value1==1 && value2==1 && value3==1){
                  lcd.setCursor(1,0);
                lcd.print("P1:E P2:E P3:E ");
                output5State="P1:E P2:E P3:E ";
                
                  }
                  else if(value1==1 && value2==1 && value3==0){
                  lcd.setCursor(1,0);
                lcd.print("P1:E P2:E P3:F ");output5State="P1:E P2:E P3:F ";
                
                  }else if(value1==1 && value2==0 && value3==1){
                  lcd.setCursor(1,0);
                lcd.print("P1:E P2:F P3:E ");output5State="P1:E P2:F P3:E ";
                
                  }else if(value1==1 && value2==0 && value3==0){
                  lcd.setCursor(1,0);
                lcd.print("P1:E P2:F P3:F ");output5State="P1:E P2:F P3:F ";
                
                  }else if(value1==0 && value2==1 && value3==1){
                  lcd.setCursor(1,0);
                lcd.print("P1:F P2:E P3:E ");output5State="P1:F P2:E P3:E ";
                
                  }else if(value1==0 && value2==1 && value3==0){
                  lcd.setCursor(1,0);
                lcd.print("P1:F P2:E P3:F ");output5State="P1:F P2:E P3:F ";
                
                  }else if(value1==0 && value2==0 && value3==1){
                  lcd.setCursor(1,0);
                lcd.print("P1:F P2:F P3:E ");output5State="P1:F P2:F P3:E ";
                
                  }else if(value1==0 && value2==0 && value3==0){
                  lcd.setCursor(1,0);
                lcd.print("P1:F P2:F P3:F ");output5State="P1:F P2:F P3:F ";
                
                  }
  
}


  
 
