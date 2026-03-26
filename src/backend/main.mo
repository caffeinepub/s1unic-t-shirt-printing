import Time "mo:core/Time";
import Text "mo:core/Text";
import Int "mo:core/Int";
import List "mo:core/List";
import Order "mo:core/Order";
import Array "mo:core/Array";

actor {
  type ContactFormSubmission = {
    name : Text;
    email : Text;
    message : Text;
    timestamp : Time.Time;
  };

  module ContactFormSubmission {
    public func compare(c1 : ContactFormSubmission, c2 : ContactFormSubmission) : Order.Order {
      Int.compare(c1.timestamp, c2.timestamp);
    };
  };

  type CustomOrderInquiry = {
    name : Text;
    email : Text;
    shirtStyle : Text;
    color : Text;
    quantity : Nat;
    designDescription : Text;
    timestamp : Time.Time;
  };

  module CustomOrderInquiry {
    public func compare(c1 : CustomOrderInquiry, c2 : CustomOrderInquiry) : Order.Order {
      Int.compare(c1.timestamp, c2.timestamp);
    };
  };

  let contactSubmissions = List.empty<ContactFormSubmission>();
  let customOrders = List.empty<CustomOrderInquiry>();

  // Store contact form submission
  public shared ({ caller }) func submitContactForm(name : Text, email : Text, message : Text) : async () {
    let submission : ContactFormSubmission = {
      name;
      email;
      message;
      timestamp = Time.now();
    };
    contactSubmissions.add(submission);
  };

  // Store custom order inquiry
  public shared ({ caller }) func submitCustomOrder(name : Text, email : Text, shirtStyle : Text, color : Text, quantity : Nat, designDescription : Text) : async () {
    let order : CustomOrderInquiry = {
      name;
      email;
      shirtStyle;
      color;
      quantity;
      designDescription;
      timestamp = Time.now();
    };
    customOrders.add(order);
  };

  // Admin - get all contact submissions
  public query ({ caller }) func getAllContactSubmissions() : async [ContactFormSubmission] {
    contactSubmissions.toArray().sort();
  };

  // Admin - get all custom orders
  public query ({ caller }) func getAllCustomOrders() : async [CustomOrderInquiry] {
    customOrders.toArray().sort();
  };
};
