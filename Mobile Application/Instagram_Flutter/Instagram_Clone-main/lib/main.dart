import 'package:flutter/material.dart';
import 'package:instagram_clone/instaHome.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        title: 'Instagram',
        debugShowCheckedModeBanner: false,
        theme: ThemeData(
            primaryColor: Colors.black,
            primaryIconTheme: IconThemeData(color: Colors.black),
            primaryTextTheme: TextTheme()),
        home: InstaHome());
  }
}
