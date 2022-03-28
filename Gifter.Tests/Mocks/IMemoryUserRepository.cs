using System;
using System.Collections.Generic;
using System.Linq;
using Gifter.Models;
using Gifter.Repositories;


//Get()
//Get(int id)
//Post(UserProfile userProfile)
//Put(int id, UserProfile userProfile)
//Delete(int id)


namespace Gifter.Tests.Mocks

{
    class InMemoryUserRepository : IUserProfileRepository
    {
        private readonly List<UserProfile> _data;

        public List<UserProfile> InternalData
        {
            get
            {
                return _data;
            }
        }

        public InMemoryUserRepository(List<UserProfile> startingData)
        {
            _data = startingData;
        }

        public void Add(UserProfile user)
        {
            var lastUser = _data.Last();
            user.Id = lastUser.Id + 1;
            _data.Add(user);
        }

        public void Delete(int id)
        {
            var UserTodelete = _data.FirstOrDefault(p => p.Id == id);
            if (UserTodelete == null)
            {
                return;
            }

            _data.Remove(UserTodelete);
        }

        public List<UserProfile> GetAll()
        {
            return _data;
        }

        public UserProfile GetById(int id)
        {
            return _data.FirstOrDefault(p => p.Id == id);
        }

        public void Update(UserProfile user)
        {
            var currentUser = _data.FirstOrDefault(p => p.Id == user.Id);
            if (currentUser == null)
            {
                return;
            }

            currentUser.Name = user.Name;
            currentUser.Email = user.Email;
            currentUser.DateCreated = user.DateCreated;
            currentUser.ImageUrl = user.ImageUrl;
            currentUser.Bio = user.Bio;

        }

      

        public List<UserProfile> Search(string criterion, bool sortDescending)
        {
            throw new NotImplementedException();
        }

        public UserProfile GetByEmail(string email)
        {
            throw new NotImplementedException();
        }

        public UserProfile GetUserProfileIdWithPostsAndComments(int id)
        {
            throw new NotImplementedException();
        }
    }
}