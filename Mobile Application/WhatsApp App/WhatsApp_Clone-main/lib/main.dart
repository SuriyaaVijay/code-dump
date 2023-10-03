import 'package:flutter/material.dart';
import 'package:whatsapp_clone/homepage.dart';

void main() {
  runApp(WhatsApp());
}

class WhatsApp extends StatelessWidget {
  const WhatsApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
          primaryColor: Color(0xFF075E54),
          primaryColorLight: Color(0xFF08D261)),
      home: HomePage(),
    );
  }
}
