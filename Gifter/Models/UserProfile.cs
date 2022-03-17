using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Gifter.Models
{
    public class UserProfile
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string Email { get; set; }

        public string ImageUrl { get; set; }
        public string Bio { get; set; }


        [Required]
        public DateTime DateCreated { get; set; }

        public List<Post> Posts { get; set; }

    }
}

//ch 7 notes 
//register  React register form  
//http post in controller for user  post fetch call for user profile 
//c# addnew user method in userprofiles and we will need to tell it ti create a new id in the object - login components 
//Login form 
//http get user controller  -  get user by Id method
