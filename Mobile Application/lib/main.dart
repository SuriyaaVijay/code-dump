import 'package:day2/login.dart';
import 'package:day2/home.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(MaterialApp(
    debugShowCheckedModeBanner: false,
    initialRoute: 'home',
    routes: {
      'home' : (context)=>Login(),
      'login' : (context)=>HomePage()
    },
  ));

}
