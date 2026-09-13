import 'package:flutter/material.dart';

void main() => runApp(const AltCampusMobileCore());

class AltCampusMobileCore extends StatelessWidget {
  const AltCampusMobileCore({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: ThemeData.dark(),
      home: Scaffold(
        backgroundColor: const Color(0xFF020208),
        body: Center(
          child: Text(
            '📱 AltCampus Department 2 Core Running (₹600/Year Array)',
            style: TextStyle(color: Colors.cyanAccent.shade400, fontSize: 16, fontWeight: FontWeight.bold),
          ),
        ),
      ),
    );
  }
}
