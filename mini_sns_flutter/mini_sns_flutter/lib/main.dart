import 'package:flutter/material.dart';
import 'package:mini_sns_flutter/src/app.dart';
import 'package:shared_preferences/shared_preferences.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  final prefs = await SharedPreferences.getInstance();
  final String? token = prefs.getString('token');
  runApp(Myapp(null));
}
