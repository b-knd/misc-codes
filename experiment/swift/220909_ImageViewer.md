**Challenge**

![](../../media/Screen%20Shot%202022-09-10%20at%209.51.12%20AM.png)

**Codes**
``` Swift
//
//  ViewController.swift
//  ImageViewer
//
//  Created by Craig Grummitt on 22/04/2016.
//  Copyright © 2016 Craig Grummitt. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    let images = ["one.jpg", "two.jpg", "three.jpg", "four.jpg", "five.jpg", "six.jpg", "seven.jpg", "eight.jpg"]
    var imageNo = 0
    
    @IBOutlet weak var imageView: UIImageView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        let tapGestureRecognizer = UITapGestureRecognizer(target: self, action: #selector(handleTap(_:)))
        tapGestureRecognizer.numberOfTapsRequired = 2
        tapGestureRecognizer.numberOfTouchesRequired = 1
        imageView.addGestureRecognizer(tapGestureRecognizer)
        
        //double tap recognizer
        let tapGestureRecognizer2 = UITapGestureRecognizer(target: self, action: #selector(handleTapRev(_:)))
        tapGestureRecognizer2.numberOfTapsRequired = 2
        tapGestureRecognizer2.numberOfTouchesRequired = 2
        imageView.addGestureRecognizer(tapGestureRecognizer2)
    }
    
    @objc func handleTap(_ sender: UITapGestureRecognizer) {
        imageNo += 1
        if imageNo == images.count {
            imageNo = 0
        }
        imageView.image = UIImage(named: images[imageNo])
    }
    
    //double tap handle function
    @objc func handleTapRev(_ sender: UITapGestureRecognizer) {
        imageNo -= 1
        if imageNo == -1 {
            imageNo = images.count-1
        }
        imageView.image = UIImage(named: images[imageNo])
    }
    
    
    @IBAction func handlePan(_ sender: UIPanGestureRecognizer) {
        let translation = sender.translation(in: self.view)
        imageView.center = CGPoint(x: imageView.center.x + translation.x, y: imageView.center.y + translation.y)
        sender.setTranslation(CGPoint.zero, in: self.view)
    }
    
    
    @IBAction func handlePinch(_ sender: UIPinchGestureRecognizer) {
        imageView.transform = imageView.transform.scaledBy(x: sender.scale, y: sender.scale)
        sender.scale = 1
    }
    
    
    @IBAction func handleRotate(_ sender: UIRotationGestureRecognizer) {
        imageView.transform = imageView.transform.rotated(by: sender.rotation)
        sender.rotation = 0
    }
    
    
    override func didReceiveMemoryWarning() {
    super.didReceiveMemoryWarning()
    // Dispose of any resources that can be recreated.
  }
  
  
}

extension ViewController: UIGestureRecognizerDelegate {
    func gestureRecognizer(_ gestureRecognizer: UIGestureRecognizer, shouldRecognizeSimultaneouslyWith otherGestureRecognizer: UIGestureRecognizer) -> Bool {
        return true
    }
}


```
